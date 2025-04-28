// src/mocks/handlers/todoHandlers.ts
import { http, HttpResponse } from 'msw';

export const todoHandlers = [
  // 목표 목록 가져오기
  http.get('/api/goals', () => {
    return HttpResponse.json([
      {
        goalId: 2182,
        title: '새로운 목표',
        color: 'goal01',
        createdAt: '2025-03-12T08:45:05.338273Z',
      },
      {
        goalId: 2184,
        title: '목표를 하나만 더',
        color: 'goal01',
        createdAt: '2025-03-12T08:46:26.702419Z',
      },
      {
        goalId: 2188,
        title: '홓ㅎㅎㅎ',
        color: 'goal05',
        createdAt: '2025-03-12T09:46:35.859963Z',
      },
    ]);
  }),

  // 월간 할일 목록 가져오기
  http.get('/api/todos/monthly', ({ request }) => {
    const url = new URL(request.url);
    const year = url.searchParams.get('year');
    const month = url.searchParams.get('month');

    return HttpResponse.json([
      {
        todoId: 5009,
        noteId: null,
        date: '2025-04-01',
        createdAt: '2025-03-20T00:25:20.167Z',
        title: 'ㅈㄱㄷㅅ',
        done: false,
        goal: null,
      },
      {
        todoId: 5076,
        noteId: null,
        date: '2025-04-09',
        createdAt: '2025-04-04T16:44:47.752Z',
        title: 'aasdfew',
        done: false,
        goal: null,
      },
      {
        todoId: 5077,
        noteId: null,
        date: '2025-04-19',
        createdAt: '2025-04-04T16:44:50.261Z',
        title: 'ㅇㄴㄹㅁㄴㅇ',
        done: false,
        goal: {
          goalId: 2182,
          title: '새로운 목표',
          color: 'goal01',
        },
      },
      {
        todoId: 5078,
        noteId: null,
        date: '2025-04-21',
        createdAt: '2025-04-04T16:45:01.778Z',
        title: 'wwww',
        done: false,
        goal: {
          goalId: 2188,
          title: '홓ㅎㅎㅎ',
          color: 'goal05',
        },
      },
    ]);
  }),

  // 장바구니(basket) 가져오기
  http.get('/api/basket', () => {
    return HttpResponse.json([
      {
        id: 409,
        title: '여기에도',
        goalId: null,
        createdAt: '2025-04-04T08:00:14.99292Z',
      },
      {
        id: 411,
        title: '정확하겠죠?',
        goalId: null,
        createdAt: '2025-04-04T08:00:26.375307Z',
      },
    ]);
  }),

  // 일별 할일 목록 가져오기
  http.get('/api/todos/daily', ({ request }) => {
    const url = new URL(request.url);
    const date = url.searchParams.get('date');

    return HttpResponse.json([
      {
        todoId: 5104,
        noteId: null,
        date: '2025-04-28',
        createdAt: '2025-04-28T14:07:47.113Z',
        title: 'adsf',
        done: false,
        goal: null,
      },
      {
        todoId: 5105,
        noteId: null,
        date: '2025-04-28',
        createdAt: '2025-04-28T14:07:51.089Z',
        title: 'gggg',
        done: false,
        goal: {
          goalId: 2182,
          title: '새로운 목표',
          color: 'goal01',
        },
      },
    ]);
  }),

  // 특정 목표에 해당하는 할일 목록 가져오기
  http.get('/api/goals/:goalId/todos', ({ params }) => {
    const { goalId } = params;

    if (goalId === '2182') {
      return HttpResponse.json({
        goalId: 2182,
        title: '새로운 목표',
        color: 'goal01',
        createdAt: '2025-03-12T08:45:05.338273Z',
        todos: [
          {
            noteId: null,
            todoId: 4721,
            goalId: 2182,
            date: '2025-03-12',
            createdAt: '2025-03-12T18:00:12.354Z',
            done: true,
            title: 'ㅎㅎ',
          },
          {
            noteId: null,
            todoId: 4740,
            goalId: 2182,
            date: '2025-03-20',
            createdAt: '2025-03-12T18:11:53.457Z',
            done: false,
            title: 'ㅇㄹㅁㄴㅇㄹ',
          },
          {
            noteId: null,
            todoId: 4750,
            goalId: 2182,
            date: '2025-03-19',
            createdAt: '2025-03-12T18:50:04.753Z',
            done: true,
            title: 'ㅜㅜ',
          },
          {
            noteId: null,
            todoId: 4751,
            goalId: 2182,
            date: '2025-03-19',
            createdAt: '2025-03-12T18:58:24.297Z',
            done: true,
            title: 'ㄴㄴㄴㄴ',
          },
          {
            noteId: 706,
            todoId: 4782,
            goalId: 2182,
            date: '2025-03-14',
            createdAt: '2025-03-13T14:12:55.369Z',
            done: false,
            title: 'asdfasdf',
          },
          {
            noteId: null,
            todoId: 5007,
            goalId: 2182,
            date: '2025-03-20',
            createdAt: '2025-03-20T00:18:48.328Z',
            done: false,
            title: 'ggg',
          },
          {
            noteId: null,
            todoId: 5010,
            goalId: 2182,
            date: '2025-03-20',
            createdAt: '2025-03-20T00:32:21.29Z',
            done: false,
            title: 'ㄴㄴㄴㄴㄴ',
          },
          {
            noteId: null,
            todoId: 5077,
            goalId: 2182,
            date: '2025-04-19',
            createdAt: '2025-04-04T16:44:50.261Z',
            done: false,
            title: 'ㅇㄴㄹㅁㄴㅇ',
          },
          {
            noteId: null,
            todoId: 5105,
            goalId: 2182,
            date: '2025-04-28',
            createdAt: '2025-04-28T14:07:51.089Z',
            done: false,
            title: 'gggg',
          },
        ],
        basketTodos: [],
      });
    }

    return HttpResponse.json({});
  }),
];
