<template>
  <div class="about">
    <figure>
      <div class="profile-img">
        <span class="blind">강주언</span>
      </div>
      <figcaption></figcaption>
    </figure>
    <div class="base education">
      <h2 class="header">학력</h2>
      <div class="list list-education">
        <div class="item">
          <div class="date">
            <div class="term">2006. 03 ~ 2007. 12</div>
            <div class="state">중퇴</div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                강남대 </div>
              <div class="line">
                국제학부
              </div>
            </div>
            <div class="content-body">
              <div class="info">
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="date">
            <div class="term">2011. 03 ~ 2013. 02</div>
            <div class="state">졸업</div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                한국IT직업전문학교 </div>
              <div class="line">
                시각디자인전공
              </div>
            </div>
            <div class="content-body">
              <div class="info">
                <div class="item">
                  <div class="label">학점</div>
                  <div class="value">3.28 / 4.5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="date">
            <div class="term">2006</div>
            <div class="state">졸업 </div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                선린인터넷고등학교 </div>
              <div class="line">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="base career">
      <div class="headers">
        <h2 class="header">경력</h2>
        <div class="term">
          <div class="total">총 6년 4개월</div>
        </div>
      </div>
      <div class="list list-career">
        <div class="item">
          <div class="date">
            <div class="term">2021. 09 ~ 재직중</div>
            <div class="term-calculator"></div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                위비스 </div>

              <div class="is-private"></div>
              <div class="position">이커머스사업부 웹팀 대리 팀원</div>
            </div>
            <div class="content-body">
              <div class="description">
              </div>
              <div class="info">
              </div>
            </div>

          </div>
        </div>
        <div class="item">
          <div class="date">
            <div class="term">2021. 08 ~ 재직중</div>
            <div class="term-calculator"></div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                프리랜서 </div>

              <div class="is-private"></div>
              <div class="position">프리랜서 </div>
            </div>
            <div class="content-body">
              <div class="description">
                퍼블리싱, UI·UX 개발, 사이트 운영 유지보수 관리 </div>
              <div class="info">
              </div>
            </div>

          </div>
        </div>
        <div class="item">
          <div class="date">
            <div class="term">2013. 10 ~ 2018. 10</div>
            <div class="term-calculator">5년 1개월</div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                위사 </div>

              <div class="is-private"></div>
              <div class="position">퍼블리싱팀 대리 팀원</div>
            </div>
            <div class="content-body">
              <div class="description">
                퍼블리싱, UI·UX 개발<br>자사 솔루션, 사이트 구축, 운영 유지보수 관리<br>타사 솔루션(카페24, 메이크샵) 기반 제작 유지보수 </div>
              <div class="info">
                <div class="item">
                  <div class="label">주요직무</div>
                  <div class="value">웹퍼블리셔 </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="item">
          <div class="date">
            <div class="term">2012. 11 ~ 2013. 08</div>
            <div class="term-calculator">10개월</div>
          </div>
          <div class="content">
            <div class="content-header">
              <div class="name">
                피플투피플소셜네트웍스 </div>

              <div class="is-private"></div>
              <div class="position">웹에이전시사업부 사원 팀원</div>
            </div>
            <div class="content-body">
              <div class="description">
                UI·UX 디자인, 퍼블리싱, 오픈마켓 관리, 유지보수 </div>
              <div class="info">
                <div class="item">
                  <div class="label">주요직무</div>
                  <div class="value">웹디자인, UI·UX디자인, HTML </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'About',
}
</script>

<style>
.about .profile-img {
  overflow: hidden;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background: url('../assets/images/profile.jpg') no-repeat center / 80%;
}
.resume-view-container pre { font-family: 'Malgun Gothic'; }
.resume-view-container .base { overflow: hidden; position: relative; margin-bottom: 33px; }
.resume-view-container .base.career div.headers { font-size: 0; }
.resume-view-container .base.career div.headers .term { float: left; margin-left: 15px; vertical-align: top; font-size: 0; -webkit-transform: translateY(10px); -moz-transform: translateY(10px); -ms-transform: translateY(10px); -o-transform: translateY(10px); transform: translateY(10px); }
.resume-view-container .base.career div.headers .total { float: left; vertical-align: top; font-size: 14px; color: #ff5b5b; }
.resume-view-container .base.career div.headers .detail { float: left; margin-left: 6px; vertical-align: top; font-size: 14px; color: #000; white-space: nowrap; }
.resume-view-container .base.career div.headers .detail em { color: #ff5b5b; }
.resume-view-container .base.career div.headers h2.header { float: left; display: inline-block; vertical-align: top; }
.resume-view-container .base.career div.headers:after { content: ''; display: block; clear: both; }
.resume-view-container h2.header { margin-bottom: 13px; font-size: 22px; color: #000; }
.resume-view-container .categorys { margin-bottom: 10px; font-size: 0; }
.resume-view-container .categorys .item { position: relative; display: inline-block; padding-left: 17px; margin-left: 16px; vertical-align: top; font-size: 14px; color: #000; }
.resume-view-container .categorys .item:before { content: ''; position: absolute; left: 0; top: 0; width: 1px; height: 11px; background-color: #ddd; -webkit-transform: translateY(4px); -moz-transform: translateY(4px); -ms-transform: translateY(4px); -o-transform: translateY(4px); transform: translateY(4px); }
.resume-view-container .categorys .item:first-child { margin-left: 0; padding-left: 0; }
.resume-view-container .categorys .item:first-child:before { display: none; }
.resume-view-container .warning {padding-top:21px; text-align:center}
.resume-view-container .warning .description { font-size: 12px; color: #888; line-height: 1.8;}
.profile { overflow: hidden; position: relative; }
.profile.image .container { height: 180px; padding-left: 170px; }
.profile.searching .container { padding-left: 170px; }
.profile .container { overflow: hidden; position: relative; width: 940px; padding: 0 0 20px 40px; margin-bottom: 10px; background-color: #fff; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.profile .photo { z-index: 10; position: absolute; left: 0; top: 0; width: 140px; height: 182px; }
.profile .photo img { width: 140px; height: 182px; }
.profile .info-general { padding-top: 15px; margin-bottom: 13px; font-size: 0; }
.profile .info-general .item { display: inline-block; font-size: 14px; color: #888; margin-left: 7px; vertical-align: top; }
.profile .info-general .name { margin-left: 0; font-size: 20px; color: #000; }
.profile .info-general .year, .profile .info-general .sex, .profile .info-general .age { -webkit-transform: translateY(8px); -moz-transform: translateY(8px); -ms-transform: translateY(8px); -o-transform: translateY(8px); transform: translateY(8px); }
.profile .info-detail { width: 650px; }
.profile .info-detail .item { position: relative; display: inline-block; width: 300px; padding-left: 83px; margin-bottom: 11px; vertical-align: top; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.profile .info-detail .item-full { display: block; width: 100%; }
.profile .info-detail .label { position: absolute; left: 0; top: 0; width: 68px; font-size: 14px; color: #888; }
.profile .info-detail .label:after { content: ''; display: block; position: absolute; right: 0; top: 0; width: 1px; height: 11px; background-color: #ddd; -webkit-transform: translateY(6px); -moz-transform: translateY(6px); -ms-transform: translateY(6px); -o-transform: translateY(6px); transform: translateY(6px); }
.profile .info-detail .value { font-size: 14px; color: #000; letter-spacing: 0; }
.profile .summary { position: relative; overflow: hidden; height: 150px; background-color: #fff; font-size: 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.profile .summary.col-4 .item { width: 235px; }
.profile .summary.col-4 .item:first-child { width: 233px; }
.profile .summary.is-few { height: auto; }
.profile .summary.is-few .item { height: auto; padding: 27px 15px; }
.profile .summary.is-few .item:after { height: 50px; }
.profile .summary .item { float: left; position: relative; display: inline-block; height: 150px; padding: 27px 15px 0; vertical-align: top; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.profile .summary .item:after { content: ''; display: block; position: absolute; left: 0; top: 50%; width: 1px; height: 89px; background-color: #edeef0; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -o-transform: translateY(-50%); transform: translateY(-50%); }
.profile .summary .item:first-child:after { display: none; }
.profile .summary .item.item-intern .description, .profile .summary .item.item-certificate .description { margin-bottom: 0; }
.profile .summary .item.is-singleline div.header { margin-bottom: 25px; }
.profile .summary .item.newcomer .description { color: #39f; }
.profile .summary div.header { margin-bottom: 7px; font-size: 14px; color: #888; text-align: center; }
.profile .summary .description { margin-bottom: 5px; font-size: 14px; color: #000; line-height: 1.6; }
.profile .summary .description.ellipsis { overflow: hidden; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }
.profile .summary .description.etc { padding-top: 2px; font-size: 13px; color: #888; }
.profile .summary .options { font-size: 0; }
.profile .summary .options .option { margin-bottom: 5px; font-size: 13px; color: #39f; }

.list { overflow: hidden; position: relative; border-top: 1px solid #000; background-color: #fff; font-size:10px; }
.list.list-introduction { padding: 27px 38px 33px; }
.list.list-introduction div.header { font-weight: bold; }
.list li.item { margin-bottom: 31px; }
.list li.item:last-child { margin-bottom: 0; }
.list li.item div.header { margin-bottom: 9px; font-size: 18px; color: #000; line-height: 1.9; }
.list li.item .content { font-size: 14px; color: #000; line-height: 1.8; word-break: break-all;}
.list div.item { overflow: hidden; position: relative; padding-left: 200px; padding-right: 40px; border-top: 1px solid #edeef0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.list div.item:first-child { border-top: 0; }
.list div.item.etc { border-color: #b2b2b2; }
.list div.item.etc div.header { position: absolute; left: 38px; top: 24px; }
.list .date { position: absolute; left: 38px; top: 22px; font-size: 14px; color: #000; letter-spacing: 0; }
.list .date .term { margin-bottom: 7px; font-size: 14px; color: #000; }
.list .date .term-calculator { font-size: 13px; color: #3399ff; letter-spacing: -1px; }
.list .content-header { margin-bottom: 8px; font-size: 0; line-height: 1.55; }
.list .content-header .name { position: relative; top: -3px; display: inline; font-size: 16px; font-weight: bold; color: #000; vertical-align: top; word-break: break-all; }
.list .content-header .agency { display: inline; margin-left: 11px; font-size: 14px; color: #666; }
.list .content-body { font-size: 14px; color: #000; line-height: 2.3; }
.list .content-body p { font-size: 14px; color: #000; line-height: 1.8; }
.list.list-education div.item { padding-top: 21px; padding-bottom: 17px; }
.list.list-education div.item .line { display: inline; margin-left: 11px; font-size: 14px; color: #666; }
.list.list-education div.item.no-description { padding-top: 34px; }
.list.list-education > div.item { min-height: 90px; }
.list.list-education .content-header .name { top: -2px; }
.list.list-education .state { font-size: 13px; color: #3399ff; letter-spacing: -1px; }
.list.list-education .info .item { min-height: auto; margin-bottom: 7px; padding: 0 0 0 73px; border-top: 0; }
.list.list-education .info .label { position: absolute; left: 0; top: 0; width: 61px; font-size: 14px; color: #666; line-height: 1.8; }
.list.list-education .info .label:after { content: ''; display: block; position: absolute; right: 0; top: 0; width: 1px; height: 12px; background-color: #ddd; -webkit-transform: translateY(8px); -moz-transform: translateY(8px); -ms-transform: translateY(8px); -o-transform: translateY(8px); transform: translateY(8px); }
.list.list-education .info .value { font-size: 14px; color: #666; line-height: 1.8; }
.list.list-career div.item { padding-top: 21px; padding-bottom: 17px; }
.list.list-career > div.item { min-height: 90px; }
.list.list-career .content-header .is-private { display: inline; margin-left: 2px; font-size: 14px; color: #000; vertical-align: baseline; }
.list.list-career .content-header .position { display: inline; margin-left: 11px; font-size: 14px; color: #666; vertical-align: baseline; }
.list.list-career .content-body .description { margin-bottom: 9px; }
.list.list-career .info .item { min-height: auto; padding: 0 0 0 73px; border-top: 0; }
.list.list-career .info .label { position: absolute; left: 0; top: 0; width: 61px; font-size: 14px; color: #666; }
.list.list-career .info .label:after { content: ''; display: block; position: absolute; right: 0; top: 0; width: 1px; height: 12px; background-color: #ddd; -webkit-transform: translateY(12px); -moz-transform: translateY(12px); -ms-transform: translateY(12px); -o-transform: translateY(12px); transform: translateY(12px); }
.list.list-career .info .value { font-size: 14px; color: #666; }
.list.list-career div.career-description { min-height: auto; padding: 18px 40px 19px 200px; border-color: #b2b2b2; }
.list.list-career div.career-description div.header { position: absolute; left: 40px; top: 21px; font-size: 14px; color: #000; }
.list.list-career div.career-description .description { font-size: 14px; color: #000; line-height: 1.8; }
.list.list-intern div.item { padding-top: 21px; padding-bottom: 17px; }
.list.list-intern > div.item { min-height: 90px; }
.list.list-intern .content-header { margin-bottom: 4px; }
.list.list-intern .position { overflow: hidden; display: inline-block; height: 20px; margin-left: 9px; padding: 2px 14px 0; font-size: 12px; border: 1px solid #000; line-height: 1; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.list.list-intern .position.position1 { color: #ff5b5b; border-color: #fa9899; }
.list.list-intern .position.position2 { color: #7ba71f; border-color: #abc675; }
.list.list-intern .position.position3 { color: #3189ba; border-color: #7eb4d2; }
.list.list-intern .position.position4 { color: #6772df; border-color: #9fa6e9; }
.list.list-intern .position.position5 { color: #4db59d; border-color: #8fcec1; }
.list.list-intern .position.position6 { color: #ff830a; border-color: #f9bc8d; }
.list.list-intern .position.position7 { color: #d06507; border-color: #de9e67; }
.list.list-certificate .item { min-height: auto; padding-top: 20px; padding-bottom: 14px; }
.list.list-certificate .item.first-child { min-height: auto; }
.list.list-certificate .item.etc { padding-top: 17px; padding-bottom: 20px; }
.list.list-certificate .item.etc div.header { top: 23px; font-size: 14px; color: #000; }
.list.list-certificate .item.etc .description { font-size: 14px; color: #000; line-height: 1.8; }
.list.list-certificate .date { top: 21px; }
.list.list-learn div.item { min-height: 97px; padding-top: 20px; padding-bottom: 17px; }
.list.list-learn div.item:first-child { min-height: 96px; }
.list.list-awards .date { top: 21px; }
.list.list-awards div.item { min-height: 97px; padding-top: 21px; padding-bottom: 16px; }
.list.list-awards div.item:first-child { min-height: 96px; }
.list.list-experience div.item { min-height: 90px; padding-top: 20px; padding-bottom: 20px; }
.list.list-experience div.item:first-child { min-height: 89px; }
.list.list-experience .content-header { margin-bottom: 0; }
.list.list-language div.item { min-height: 94px; padding-top: 21px; }
.list.list-language .language { position: absolute; left: 39px; top: 21px; font-size: 16px; font-weight: bold; color: #000; }
.list.list-language .content { margin-bottom: 19px; }
.list.list-language .content-header { margin-bottom: 5px; }
.list.list-language .category { display: inline-block; vertical-align: top; font-size: 16px; color: #000; font-weight: bold; }
.list.list-language .passdate { position: relative; top: 2px; display: inline-block; margin-left: 8px; vertical-align: top; font-size: 14px; color: #000; }
.list.list-language .passdate span { letter-spacing: 0; }
.list.list-portfolio { overflow: hidden; font-size: 0; }
.list.list-portfolio div.item { float: left; overflow: hidden; display: inline-block; width: 50%; height: 67px; padding: 21px 0 0 61px; vertical-align: top; border-top: 0; border-bottom: 1px solid #edeef0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
.list.list-portfolio div.item:last-child, .list.list-portfolio div.item:nth-last-child(2):nth-child(odd) { border-bottom: 0; }
.list.list-portfolio div.item i.icon { overflow: hidden; display: block; position: absolute; left: 40px; top: 23px; width: 16px; height: 16px; margin-right: 5px; vertical-align: top; background: url("/content/images/text_user/resume/view/sprite-icon-file.png") no-repeat; }
.list.list-portfolio div.item i.icon.docx, .list.list-portfolio div.item i.icon.doc { background-position: 0 -118px; }
.list.list-portfolio div.item i.icon.pptx, .list.list-portfolio div.item i.icon.ppt { background-position: 0 -164px; }
.list.list-portfolio div.item i.icon.xlsx, .list.list-portfolio div.item i.icon.xls, .list.list-portfolio div.item i.icon.excel { background-position: 0 -210px; }
.list.list-portfolio div.item i.icon.pdf { background-position: 0 -256px; }
.list.list-portfolio div.item i.icon.hwp { background-position: 0 -303px; }
.list.list-portfolio div.item i.icon.zip { background-position: 0 -528px; }
.list.list-portfolio div.item i.icon.jpg, .list.list-portfolio div.item i.icon.jpeg { background-position: 0 -623px; }
.list.list-portfolio div.item i.icon.gif { background-position: 0 -573px; }
.list.list-portfolio div.item i.icon.psd { background-position: 0 -673px; }
.list.list-portfolio div.item i.icon.png { background-position: 0 -723px; }
.list.list-portfolio div.item i.icon.txt { width: 13px; background-position: -2px -773px; }
.list.list-portfolio div.item i.icon.swf { background-position: 0 -823px; }
.list.list-portfolio div.item i.icon.ai { background-position: 0 -873px; }
.list.list-portfolio div.item i.icon.url { background-position: 0 -973px; }
.list.list-portfolio div.item i.icon.rtf { background-position: 0 -1089px; }
.list.list-portfolio div.item i.icon.gul { background-position: 0 -1023px; }
.list.list-portfolio div.item i.icon.alz { width: 13px; background-position: -2px -1155px; }
.list.list-portfolio div.item .name { overflow: hidden; display: block; font-size: 14px; color: #000; letter-spacing: 0; white-space: nowrap; -o-text-overflow: ellipsis; text-overflow: ellipsis; }
.list-hopework li { font-size: 0; }
.list-hopework .category { display: inline-block; zoom: 1; *display: inline; margin-right: 10px; vertical-align: top; font-size: 14px; color: #000; }
.list-hopework .category:after { content: '>'; margin-left: 10px; }
.list-hopework .item { display: inline-block; zoom: 1; *display: inline; padding-left: 0 !important; vertical-align: top; font-size: 14px; color: #000; }
.list-hopework .item:after { content: ','; display: inline-block; zoom: 1; *display: inline; margin-right: 5px; vertical-align: top; }
.list-hopework .item:last-child:after { display: none; }
</style>