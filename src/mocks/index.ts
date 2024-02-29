const IS_BROWSER = typeof window !== "undefined";

export const setupMocks = async () => {
  const { server } = await import("./server");
  server.listen();
};
