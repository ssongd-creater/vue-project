<template>
  <section id="upper">
    <WeatherTodayChild v-bind:market-lat="markerLat" v-bind:marker-lon="markerLon"/>
    <div id="map-box">
      <!-- id값이 map이여야 api를 불러와 할당할때 카카오 데이터를 받아올 수 있다. -->
      <div id="map"></div>
    </div>
    <div class="button-box">

    </div>
  </section>
  <section id="under">
      <WeatherTimeltyChild v-bind:market-lat="markerLat" v-bind:marker-lon="markerLon"/>
  </section>
</template>

<script>
import WeatherTimeltyChild from "./WeatherTimeltyChild.vue";
import WeatherTodayChild from "./WeatherTodayChild.vue";
export default {
    data() {
        return {
            //상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 프롭스props를 활용한다.v-bind
            markerLat: {},
            markerLon: {},
            todayWeather: true,
            tomorrowWeather: false
        };
    },
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        }
        else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=\tf27e76018cedc6b1d6d301c0f19ae43e";
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var mapContainer = document.getElementById("map"), // 지도를 표시할 section
            mapOption = {
                center: new kakao.maps.LatLng(36.73035, 127.967487),
                level: 13, // 지도의 확대 레벨
            };
            var map = new kakao.maps.Map(mapContainer, mapOption); // eslint-disable-line no-unused-vars
            // 마커가 표시될 위치입니다. - 여기서부터 좌표만 적은 것
            var positions = [
                {
                    // 서울
                    lating: new kakao.maps.LatLng(37.5683, 126.9778),
                },
                {
                    // 인천
                    lating: new kakao.maps.LatLng(37.45597294471435, 126.70526384491123),
                },
                {
                    // 수원
                    lating: new kakao.maps.LatLng(37.2911, 127.0089),
                },
                {
                    // 대전
                    lating: new kakao.maps.LatLng(36.3333, 127.4167),
                },
                {
                    // 태백
                    lating: new kakao.maps.LatLng(37.1759, 128.9889),
                },
                {
                    // 강릉
                    lating: new kakao.maps.LatLng(37.7556, 128.8961),
                },
                {
                    // 대구
                    lating: new kakao.maps.LatLng(35.8, 128.55),
                },
                {
                    // 울산
                    lating: new kakao.maps.LatLng(35.5372, 129.3167),
                },
                {
                    // 부산
                    lating: new kakao.maps.LatLng(35.1028, 129.0403),
                },
                {
                    // 전주
                    lating: new kakao.maps.LatLng(35.8219, 127.1489),
                },
                {
                    // 광주
                    lating: new kakao.maps.LatLng(35.1547, 126.9156),
                },
                {
                    // 제주도
                    lating: new kakao.maps.LatLng(33.5097, 126.5219),
                },
            ];
            const vm = this;
            // 마커를 생성합니다.
            positions.forEach(function (pos) {
                var marker = new kakao.maps.Marker({
                    position: pos.lating, // 마커의 위치
                });
                // 마커가 지도 위에 표시되도록 설정합니다.
                marker.setMap(map);
                //마커 클릭 이벤트를 등록합니다.
                kakao.maps.event.addListener(marker, "click", () => {
                    //마커 position을 출력합니다.
                    //console.log(marker.getPosition());
                    vm.markerLon = marker.getPosition().La;
                    vm.markerLat = marker.getPosition().Ma;
                    console.log(vm.markerLat);
                    console.log(vm.markerLon);
                    return marker;
                });
                // 아래 코드는 지도 위의 마커를 제거하는 코드입니다.
                // marker.setMap(null);
            });
        },
        showTodayWeather() {
            if (this.todayWeather == false && this.tomorrowWeather == true) {
                this.todayWeather = !this.todayWeather;
                this.tomorrowWeather = !this.tomorrowWeather;
            }
        },
        showTomorrowWeather() {
            if (this.todayWeather == true && this.tomorrowWeather == false) {
                this.todayWeather = !this.todayWeather;
                this.tomorrowWeather = !this.tomorrowWeather;
            }
        },
    },
    components: { WeatherTodayChild, WeatherTimeltyChild }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
  #upper{
    width:100%;height:60%;
    @include center-sb;
    position:relative;

    #map-box{
      position:relative; width:50%;height:100%;
    }
    #map{
      position:absolute;bottom:0;right:50%;transform:translateX(50%);width:80%;height:80%;border-radius:10px;box-shadow:4px 4px 4px grey;
    }
  }
</style>