// 'redux-persist-transform-expire' 모듈에 대한 타입 선언
declare module 'redux-persist-transform-expire' {
  import { Transform } from 'redux-persist';

  interface ExpireOptions {
    expireSeconds: number; // 만료 시간 (초 단위)
    expiredState: any; // 만료 후 상태 설정
    autoExpire?: boolean; // 만료 시 자동으로 상태를 제거할지 여부
  }

  /**
   * redux-persist-transform-expire 모듈의 기본 함수 타입 정의
   * @param key 만료할 키 값
   * @param options 만료 설정 옵션
   * @returns redux-persist의 Transform 객체
   */
  export default function expireReducer(key: string, options: ExpireOptions): Transform<any, any>;
}
