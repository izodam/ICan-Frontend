export async function initMsw() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({
      onUnhandledRequest: 'bypass', // 핸들러 없는 요청은 무시
    });
    globalThis.fetch = server.fetch; // ✨ 이 줄 추가!! ✨
  } else {
    const { worker } = await import('./browser');
    await worker.start();
  }
}
