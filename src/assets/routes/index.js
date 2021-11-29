//createRouter, createWebHasHistory 2가지 메소드를 가지고 있다.
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "~/pages/Home.vue";

//기본 내보내기
export default createRouter({
  //내부에 기본 구성 옵션 작성

  //1. Hash ahemdhk History 모드가 있다.
  // - Hash 모드 : http://google.com/#/search 처럼 특정한 주소부분에 도메인 뒤에 #을 붙혀 접근하는 방법
  // 특정 페이지에서 새로고침을 했을 때, '페이지를 찾을 수 없음'이라는 메시지를 방지하는 기능이다.

  history: createWebHashHistory(),

  //페이지들을 구성해주는 개념
  routes: [
    //객체 리터형 작성
    {
      //경로
      path: "/",
      //어떤 vue.js의 components 연결할 것인지를 기입한다.
      component: Home,
    },
  ],
});
