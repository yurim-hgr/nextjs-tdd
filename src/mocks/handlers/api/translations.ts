import { rest, DelayMode } from "msw";
import {
  REQUEST_TRANSLATE_RESPONSE,
  REQUEST_TRANSLATE_VARIATION_RESPONSE,
  REQUEST_SOLUTION_CREATE_RESPONSE,
} from "constants/dummy";

// NOTE : 번역 API
const requestTranslate: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx
) => {
  return res(
    ctx.delay(800),
    ctx.status(200),
    ctx.json(REQUEST_TRANSLATE_RESPONSE) as any
  );
};

// NOTE : 지문변형 API
const requestSolutaionVariant: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx
) => {
  // NOTE : API Error test, 0.3보다 낮으면 에러처리
  const errorPercent = Math.random();
  const isError = errorPercent < 0.3;

  const errorResponse = res(ctx.delay(800), ctx.status(430));
  const successResponse = res(
    ctx.delay(800),
    ctx.status(200),
    ctx.json(REQUEST_TRANSLATE_VARIATION_RESPONSE) as any
  );
  return isError ? errorResponse : successResponse;
};
// NOTE : 문제생성 API
const requestSolutionMake: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx
) => {
  return res(
    ctx.delay(800),
    ctx.status(200),
    ctx.json(REQUEST_SOLUTION_CREATE_RESPONSE) as any
  );
};

export const translationHandlers = [
  /**
   * 번역 요청(stpe 2) api
   * response: {
   *
   *  data
   * }
   */
  rest.post("/mock/steps/2", requestTranslate),
  /**
   * 지문 변형(stpe 5) api
   * response: {
   *  data
   * }
   */
  rest.post("/mock/steps/5", requestSolutaionVariant),
  /**
   * 유형적용, 문제 제작(stpe 7) api
   * response: {
   *  data
   * }
   */
  rest.post("/mock/steps/7", requestSolutionMake),
];
