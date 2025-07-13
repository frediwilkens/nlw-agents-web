import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomQuestionRequest } from './types/create-room-question-request'
import type { CreateRoomQuestionResponse } from './types/create-room-question-response'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useCreateRoomQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const parsedResponse: CreateRoomQuestionResponse = await response.json()
      return parsedResponse
    },
    onMutate({ question }) {
      const questions =
        queryClient.getQueryData<GetRoomQuestionsResponse>([
          'get-room-questions',
          roomId,
        ]) || []

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-room-questions', roomId],
        [newQuestion, ...questions]
      )

      return { newQuestion, questions }
    },
    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-room-questions', roomId],
        (oldQuestions) => {
          if (!oldQuestions) {
            return oldQuestions
          }

          if (!context.newQuestion) {
            return oldQuestions
          }

          return oldQuestions.map((oldQuestion) => {
            if (oldQuestion.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              }
            }
            return oldQuestion
          })
        }
      )
    },
    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-room-questions', roomId],
          context.questions
        )
      }
    },
  })
}
