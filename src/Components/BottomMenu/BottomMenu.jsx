import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from '../../utils/consts';
import dom from "../../static/dom.png"
import email from "../../static/email.png"
import phone from "../../static/phone.png"
import { observer } from "mobx-react-lite";
import "./BottomMenu.css"

const BottomMenu = () => {
    const navigate = useNavigate();
    return (
      <div class="bottommenu">
          <div class="information">
            <div class="connection">
              <Navbar.Brand href="" onclick={() => navigate(MAINPAGE_ROUTE)}>
              <div class="buttons">
                ПРИЕЗЖАЙТЕ
                <div class="headerimages"><img src={dom}></img></div>
              </div>
              </Navbar.Brand>
              <div class="textY"><h>Москва, ул. Михалковская,<br/> дом 63Б строение 1, офис 3/1</h></div>
            </div>
            <div class="connection">
              <Navbar.Brand href="" onclick={() => navigate(MAINPAGE_ROUTE)}>
              <div class="buttons">
                ЗВОНИТЕ
                <div class="headerimages"><img src={email}></img></div>
              </div>
              </Navbar.Brand>
              <div class="textY"><h>8 993 266-55-96</h></div>
              </div>
            <div class="connection">
              <Navbar.Brand href="" onclick={() => navigate(MAINPAGE_ROUTE)}>
              <div class="buttons">
                ПИШИТЕ
                <div class="headerimages"><img src={phone}></img></div>
              </div>
              </Navbar.Brand>
              <div class="textY"><h>info@osterrig.ru</h></div>
            </div>
          </div>
          <div class="btmenu">
              <a class="textP" href=''>
              <svg width="87" height="29" viewBox="0 0 87 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M73.8002 0.202457C73.7617 0.313798 73.5601 0.44982 73.3519 0.504729C72.9765 0.603783 72.9548 0.650103 70.465 6.63585C69.0852 9.95302 67.9535 12.7295 67.9501 12.8057C67.9453 12.9138 68.3772 12.9377 69.9134 12.9144L71.8829 12.8846L74.3469 6.95878C75.7021 3.69957 76.8427 0.9228 76.8819 0.7883C76.9424 0.58008 76.9068 0.543655 76.6424 0.543655C76.3702 0.543655 76.341 0.510166 76.406 0.271827C76.476 0.0154398 76.453 0 76.0025 0C75.6287 0 75.5086 0.047298 75.4498 0.217462C75.4086 0.337066 75.3295 0.434924 75.2742 0.434924C75.2188 0.434924 75.0895 0.464607 74.9867 0.500923C74.8457 0.550722 74.7997 0.497227 74.7997 0.283462C74.7997 0.0260952 74.757 0 74.3348 0C73.9853 0 73.8526 0.0502337 73.8002 0.202457ZM9.66226 0.459932C8.05775 0.975969 6.60963 2.07241 5.78799 3.3936C5.39638 4.02316 3.38986 8.76654 3.16007 9.60595C3.08454 9.88202 3.04376 10.4492 3.06929 10.8664C3.15664 12.2879 4.05677 13.0278 5.82203 13.1292C6.60715 13.1742 6.96684 13.1399 7.61602 12.9583C9.14216 12.5315 10.678 11.4662 11.5265 10.2462C12.1366 9.36891 14.2037 4.4671 14.4248 3.37316C14.6822 2.10047 14.1845 1.00185 13.1399 0.536152C12.2856 0.155268 10.7165 0.120909 9.66226 0.459932ZM23.4399 0.550614C21.2933 0.606393 21.0038 0.637164 20.2933 0.885397C18.729 1.43199 17.7421 2.137 17.064 3.19256C16.1614 4.59736 16.2312 5.59812 17.3519 7.31933C18.0876 8.44948 18.1523 8.63531 17.9101 8.9254C17.6245 9.26747 17.2461 9.35087 15.9713 9.3525C15.2681 9.35347 14.6306 9.39055 14.5545 9.43513C14.4226 9.51233 13.097 12.5985 13.097 12.8285C13.097 12.8995 13.9141 12.939 15.3831 12.939C17.9238 12.939 18.944 12.7811 20.1095 12.2079C21.4244 11.561 22.5722 10.1574 22.7472 8.98205C22.8706 8.15428 22.7018 7.60204 21.9601 6.40665C21.1809 5.1507 21.1079 4.79917 21.5433 4.39871C21.8157 4.14809 21.9118 4.13178 23.1164 4.13178C23.9604 4.13178 24.4659 4.08524 24.5938 3.99586C24.7526 3.88485 26.0995 0.880938 26.0995 0.637925C26.0995 0.500271 25.7817 0.489833 23.4399 0.550614ZM62.3102 0.515167L61.5822 0.553549L61.383 1.01065C60.9232 2.06632 56.478 12.8201 56.478 12.8769C56.478 12.911 57.3525 12.939 58.4214 12.939C59.8097 12.939 60.39 12.9016 60.4529 12.808C60.5012 12.736 60.8964 11.8185 61.331 10.7693C62.0984 8.91681 62.1315 8.8606 62.4763 8.82852C62.8737 8.79155 63.2157 9.0337 63.2157 9.35217C63.2157 9.46384 62.9231 10.255 62.5655 11.1101C62.208 11.9653 61.9154 12.7266 61.9154 12.802C61.9154 12.9066 62.3743 12.939 63.8574 12.939H65.7995L66.4144 11.4983C67.1629 9.74491 67.2982 8.80003 66.9027 8.08708C66.7697 7.84722 66.5744 7.58496 66.4688 7.50429C66.298 7.37392 66.3448 7.32151 66.8909 7.03152C67.7906 6.55365 68.6873 5.67445 69.1434 4.82287C69.4817 4.19093 69.545 3.94748 69.5771 3.15592C69.6123 2.28346 69.5937 2.19919 69.2612 1.72208C69.0509 1.42046 68.6842 1.09449 68.3558 0.917472C67.8784 0.660106 67.6171 0.608241 66.4257 0.534304C65.0504 0.449059 63.6871 0.442644 62.3102 0.515167ZM83.3104 0.538871C81.6086 0.683809 80.1507 1.36903 78.8998 2.61183C77.9667 3.53887 77.5946 4.22278 76.3274 7.33934C75.4493 9.49885 75.3547 9.80601 75.353 10.4988C75.3503 11.7402 75.988 12.6118 77.1831 12.9997C77.8847 13.2273 79.3526 13.1992 80.2627 12.9406C81.7498 12.5181 83.3631 11.2915 84.2569 9.90398C84.6961 9.22213 85.9109 6.45144 85.9109 6.13156C85.9109 5.92301 82.455 5.90833 82.2779 6.11612C82.2142 6.19092 81.9106 6.86364 81.6032 7.61117C81.0512 8.954 80.7625 9.39316 80.3703 9.48754C80.0732 9.55898 79.6461 9.38283 79.6461 9.18875C79.6461 8.86223 81.5509 4.4011 81.7821 4.18614C81.992 3.99108 82.2015 3.96509 83.8157 3.93421C84.8056 3.91518 85.666 3.85397 85.7279 3.79808C85.9136 3.63031 87.0817 0.712732 86.9954 0.632053C86.8643 0.509405 84.3909 0.446776 83.3104 0.538871ZM28.0647 0.630422C27.9527 0.796998 26.6905 3.91171 26.6905 4.02131C26.6905 4.08937 27.1892 4.13178 27.9908 4.13178C28.7059 4.13178 29.291 4.14863 29.291 4.16918C29.291 4.18984 28.4932 6.13014 27.518 8.48102C26.5428 10.8319 25.7449 12.7979 25.7449 12.8498C25.7449 12.9017 26.6334 12.9308 27.7196 12.9144L29.6942 12.8846L31.0902 9.51396C31.858 7.6601 32.675 5.69228 32.9058 5.14091L33.3255 4.13852L34.7009 4.10797L36.0764 4.07741L36.7561 2.44645C37.13 1.54942 37.4385 0.754376 37.4416 0.679569C37.4459 0.573012 36.4388 0.543655 32.785 0.543655C30.2208 0.543655 28.0967 0.582689 28.0647 0.630422ZM42.8254 0.747634C41.3583 1.13754 39.9372 1.9801 39.0824 2.96694C38.8123 3.27867 38.3688 3.97412 38.0967 4.51234C37.5292 5.63498 36.2261 8.82646 36.0189 9.6016C35.7457 10.6231 36.1182 11.7892 36.891 12.3313C37.7139 12.9088 38.0613 12.9774 40.4025 13.0253C42.4203 13.0666 42.6038 13.0546 42.7759 12.8686C42.9774 12.6509 44.0666 10.0891 44.0666 9.83287C44.0666 9.70467 43.7609 9.67706 42.3448 9.67706C41.384 9.67706 40.5221 9.62726 40.3944 9.56452C40.1347 9.43665 40.1163 9.14275 40.333 8.58975L40.482 8.20919L42.6428 8.15482L44.8036 8.10046L45.3217 6.86614C45.6065 6.18734 45.8396 5.56344 45.8396 5.47982C45.8396 5.35544 45.4652 5.32782 43.7783 5.32782H41.7168L41.894 4.84951C42.2077 4.0026 42.2843 3.97597 44.5753 3.91432L46.5966 3.85995L47.2159 2.39208C47.5564 1.58475 47.8384 0.838533 47.8421 0.733934C47.8485 0.559203 47.6733 0.544307 45.6919 0.551375C44.0162 0.557464 43.3764 0.601174 42.8254 0.747634ZM50.1289 0.679569C49.9905 0.84571 45.227 12.3513 45.1545 12.6943L45.1029 12.939H46.9934C48.3645 12.939 48.9163 12.9016 49.0015 12.8031C49.066 12.7284 49.4786 11.7986 49.9183 10.7372L50.7176 8.80721H51.0918C51.9429 8.80721 51.9442 9.1994 51.0997 11.2189C50.7422 12.074 50.4496 12.8121 50.4496 12.859C50.4496 12.9058 51.3394 12.9308 52.427 12.9144L54.4045 12.8846L55.0428 11.3624C55.5722 10.0998 55.6822 9.71957 55.6876 9.1334C55.6941 8.41752 55.5047 7.90583 55.1265 7.61715C55.0247 7.53941 54.9414 7.4397 54.9414 7.39556C54.9414 7.35141 55.2797 7.11405 55.6931 6.86799C56.5298 6.37033 57.1266 5.81047 57.5812 5.09677C57.9135 4.57507 58.2514 3.51342 58.2504 2.99445C58.2485 2.04621 57.6531 1.22638 56.6562 0.799282C56.0869 0.555507 55.9531 0.545721 53.1532 0.544742C50.9624 0.543872 50.2141 0.577253 50.1289 0.679569ZM53.9215 3.81624C54.1111 4.31553 53.9016 4.89942 53.3509 5.40589C52.9408 5.78329 52.7635 5.87147 52.4156 5.87147C52.1794 5.87147 51.9863 5.8344 51.9863 5.78916C51.9863 5.74393 52.1626 5.29128 52.3782 4.7834C52.5937 4.27552 52.8061 3.77133 52.8501 3.66304C52.9114 3.51179 53.0324 3.47396 53.3721 3.49994C53.7254 3.52702 53.8357 3.59041 53.9215 3.81624ZM65.1863 3.56366C65.4474 3.71653 65.4968 4.23311 65.2963 4.71599C65.0175 5.38751 64.5302 5.77568 63.8818 5.84299L63.3477 5.89833L63.8432 4.69033C64.3224 3.52169 64.3502 3.48233 64.6932 3.48254C64.8883 3.48265 65.1101 3.51919 65.1863 3.56366ZM10.3108 3.75894C10.413 3.85299 10.4965 3.9752 10.4965 4.03055C10.4965 4.086 10.037 5.24453 9.47514 6.60519C8.36449 9.2953 8.09392 9.70989 7.48458 9.65488C7.20254 9.62943 7.1211 9.56561 7.09592 9.35086C7.07843 9.20136 7.53292 7.95411 8.10598 6.57931C9.0405 4.33695 9.18861 4.05425 9.54417 3.83385C10.015 3.54191 10.0691 3.53669 10.3108 3.75894Z" fill="url(#paint0_linear_449_221)"/>
<path d="M2.41909 24.9411L2.95969 23.584H6.41969L5.87909 24.9411H2.41909ZM4.59232 19.4638L5.14292 18.1067H8.59292L8.04232 19.4638H4.59232ZM3.57787 22.0121L4.11199 20.6843H7.37199L6.83787 22.0121H3.57787ZM4.04292 18.1067H5.65292L2.92909 24.9411H1.33909L4.04292 18.1067ZM11.2425 18.1067H12.9125L10.7623 23.5254H13.4923L12.9187 24.9411H8.5287L11.2425 18.1067ZM16.0859 24.9411L16.6265 23.584H20.0865L19.5459 24.9411H16.0859ZM18.2591 19.4638L18.8097 18.1067H22.2597L21.7091 19.4638H18.2591ZM17.2447 22.0121L17.7788 20.6843H21.0388L20.5047 22.0121H17.2447ZM17.7097 18.1067H19.3197L16.5959 24.9411H15.0059L17.7097 18.1067ZM24.9824 21.5239C24.8685 21.7973 24.8116 22.0544 24.8116 22.2952C24.8182 22.536 24.8747 22.7476 24.981 22.9298C25.0873 23.1121 25.2389 23.2553 25.4358 23.3594C25.6328 23.4636 25.8746 23.5156 26.1612 23.5156C26.6265 23.5221 27.0593 23.4343 27.4596 23.252C27.86 23.0698 28.2321 22.8647 28.5759 22.6369L27.9144 24.4041C27.555 24.6124 27.1841 24.7816 26.802 24.9118C26.4213 25.0355 26.0009 25.0973 25.5409 25.0973C25.0009 25.0973 24.5377 25.0062 24.1514 24.8239C23.7651 24.6417 23.468 24.3878 23.2601 24.0624C23.0537 23.7304 22.938 23.3497 22.9132 22.9201C22.895 22.4905 22.9781 22.0251 23.1624 21.5239C23.3563 21.0097 23.6249 20.5346 23.9682 20.0985C24.3181 19.6624 24.7217 19.2849 25.179 18.9659C25.6363 18.647 26.1278 18.3996 26.6534 18.2239C27.1804 18.0417 27.7206 17.9505 28.2739 17.9505C28.7139 17.9505 29.0802 18.0124 29.3728 18.136C29.6736 18.2532 29.9394 18.4224 30.1704 18.6437L29.4968 20.4207C29.3492 20.1538 29.1435 19.939 28.8795 19.7763C28.617 19.607 28.2724 19.5224 27.8457 19.5224C27.551 19.5289 27.2561 19.581 26.9611 19.6786C26.6729 19.7763 26.3992 19.913 26.1403 20.0887C25.8814 20.2644 25.6512 20.476 25.4497 20.7233C25.2497 20.9641 25.094 21.231 24.9824 21.5239ZM31.4769 19.581L32.0735 18.1067H37.4735L36.8869 19.581H35.0269L32.8896 24.9411H31.2296L33.3569 19.581H31.4769ZM39.7944 21.8461H41.4744L42.3589 24.9411H40.4689L39.7944 21.8461ZM39.5527 18.1067H41.2227L38.4989 24.9411H36.8489L39.5527 18.1067ZM40.0334 19.5029L40.5827 18.1067H41.9927C42.5127 18.1067 42.9351 18.2011 43.26 18.3899C43.5863 18.5721 43.7986 18.8325 43.897 19.1709C43.9968 19.5029 43.9703 19.8934 43.8174 20.3425C43.6499 20.7982 43.3919 21.1952 43.0436 21.5337C42.6967 21.8656 42.2898 22.1227 41.8228 22.305C41.3572 22.4807 40.8577 22.5686 40.3244 22.5686H38.8044L39.3277 21.2896H40.6177C40.8243 21.2896 41.0215 21.257 41.2093 21.192C41.4052 21.1204 41.5775 21.0195 41.7263 20.8893C41.8766 20.7526 41.9934 20.5866 42.0766 20.3914C42.1437 20.2091 42.1583 20.0529 42.1204 19.9227C42.0893 19.7925 42.0116 19.6917 41.8875 19.6201C41.7633 19.5485 41.602 19.5094 41.4034 19.5029H40.0334ZM47.1951 21.5239C47.096 21.7908 47.039 22.0479 47.0242 22.2952C47.0109 22.536 47.0426 22.7541 47.1193 22.9494C47.2042 23.1381 47.337 23.2911 47.5177 23.4082C47.7065 23.5189 47.9476 23.5742 48.2409 23.5742C48.5395 23.5807 48.8303 23.5319 49.1134 23.4278C49.3964 23.3236 49.6589 23.1772 49.9007 22.9884C50.1506 22.7932 50.3696 22.5718 50.5577 22.3245C50.754 22.0707 50.9097 21.8038 51.0251 21.5239C51.1242 21.257 51.1804 21.0032 51.1937 20.7624C51.2085 20.515 51.1742 20.2937 51.0908 20.0985C51.0141 19.9032 50.8813 19.7502 50.6925 19.6396C50.5103 19.5289 50.2699 19.4704 49.9714 19.4638C49.6714 19.4638 49.3791 19.5192 49.0946 19.6298C48.8115 19.734 48.5458 19.8804 48.2973 20.0692C48.0555 20.2579 47.8365 20.4792 47.6402 20.7331C47.4521 20.9804 47.3037 21.244 47.1951 21.5239ZM45.4351 21.5239C45.6275 21.0162 45.8947 20.5476 46.2365 20.118C46.5864 19.6819 46.9874 19.3011 47.4395 18.9757C47.8916 18.6502 48.3738 18.3996 48.886 18.2239C49.4064 18.0417 49.9333 17.9505 50.4666 17.9505C50.9933 17.9505 51.4423 18.0449 51.8139 18.2337C52.1935 18.4159 52.4832 18.673 52.683 19.005C52.8909 19.3304 53.0033 19.7112 53.02 20.1473C53.0382 20.5769 52.9599 21.0357 52.7851 21.5239C52.5926 22.0316 52.3207 22.5068 51.9693 22.9494C51.6261 23.3855 51.2269 23.7727 50.772 24.1112C50.3184 24.4432 49.8315 24.7003 49.3111 24.8825C48.7908 25.0648 48.2606 25.1559 47.7206 25.1559C47.1806 25.1559 46.7248 25.0615 46.3533 24.8727C45.9832 24.6775 45.6983 24.4139 45.4985 24.0819C45.3001 23.7435 45.1925 23.3562 45.1758 22.9201C45.1672 22.4775 45.2536 22.0121 45.4351 21.5239ZM61.1907 18.1067H62.8007L59.9555 25.2633L56.9311 21.0846L55.3969 24.9411H53.7869L56.6221 17.7845L59.6565 21.9633L61.1907 18.1067ZM65.546 18.1067H67.246L64.5322 24.9411H62.8422L65.546 18.1067ZM70.0648 21.5239C69.9509 21.7973 69.894 22.0544 69.894 22.2952C69.9006 22.536 69.9571 22.7476 70.0634 22.9298C70.1697 23.1121 70.3213 23.2553 70.5183 23.3594C70.7152 23.4636 70.957 23.5156 71.2437 23.5156C71.7089 23.5221 72.1417 23.4343 72.542 23.252C72.9424 23.0698 73.3145 22.8647 73.6583 22.6369L72.9969 24.4041C72.6374 24.6124 72.2666 24.7816 71.8844 24.9118C71.5037 25.0355 71.0833 25.0973 70.6233 25.0973C70.0833 25.0973 69.6202 25.0062 69.2339 24.8239C68.8476 24.6417 68.5505 24.3878 68.3426 24.0624C68.1361 23.7304 68.0204 23.3497 67.9956 22.9201C67.9774 22.4905 68.0605 22.0251 68.2448 21.5239C68.4387 21.0097 68.7073 20.5346 69.0506 20.0985C69.4005 19.6624 69.8041 19.2849 70.2614 18.9659C70.7188 18.647 71.2102 18.3996 71.7358 18.2239C72.2628 18.0417 72.803 17.9505 73.3564 17.9505C73.7964 17.9505 74.1627 18.0124 74.4553 18.136C74.756 18.2532 75.0218 18.4224 75.2528 18.6437L74.5792 20.4207C74.4317 20.1538 74.2259 19.939 73.9619 19.7763C73.6994 19.607 73.3548 19.5224 72.9282 19.5224C72.6334 19.5289 72.3385 19.581 72.0436 19.6786C71.7553 19.7763 71.4817 19.913 71.2227 20.0887C70.9638 20.2644 70.7336 20.476 70.5322 20.7233C70.3322 20.9641 70.1764 21.231 70.0648 21.5239ZM77.0868 22.5393C77.1482 22.7736 77.2254 22.9819 77.3184 23.1642C77.4195 23.3399 77.5485 23.4798 77.7054 23.584C77.869 23.6881 78.0715 23.7369 78.313 23.7304C78.493 23.7304 78.6628 23.7011 78.8224 23.6426C78.9835 23.5775 79.1196 23.4896 79.2308 23.379C79.3501 23.2618 79.4323 23.1316 79.4773 22.9884C79.5415 22.8192 79.5358 22.6792 79.4603 22.5686C79.3848 22.4579 79.2631 22.3603 79.0952 22.2757C78.9273 22.1911 78.7348 22.0967 78.5179 21.9926C78.3538 21.921 78.188 21.8266 78.0206 21.7094C77.8613 21.5857 77.7204 21.4393 77.5979 21.2701C77.4821 21.1008 77.402 20.9056 77.3577 20.6843C77.32 20.463 77.3456 20.2124 77.4342 19.9325C77.565 19.5224 77.7896 19.1709 78.1078 18.878C78.4274 18.5786 78.7979 18.3508 79.2192 18.1946C79.6485 18.0319 80.0899 17.9505 80.5432 17.9505C80.9632 17.9505 81.3114 18.0189 81.5878 18.1556C81.8642 18.2922 82.0798 18.4777 82.2345 18.7121C82.3907 18.9399 82.496 19.1872 82.5502 19.4541L81.071 20.1278C81.0227 19.9846 80.9582 19.8544 80.8775 19.7372C80.7982 19.6136 80.6965 19.5159 80.5723 19.4443C80.4482 19.3727 80.2895 19.3369 80.0961 19.3369C79.9428 19.3369 79.8011 19.3597 79.671 19.4053C79.5409 19.4508 79.4258 19.5192 79.3256 19.6103C79.2335 19.6949 79.1712 19.7958 79.1385 19.913C79.0845 20.0366 79.0833 20.1473 79.135 20.2449C79.1882 20.336 79.2694 20.4207 79.3788 20.4988C79.4948 20.5769 79.6256 20.6485 79.7712 20.7136C79.9235 20.7786 80.0757 20.8437 80.228 20.9088C80.502 21.026 80.7322 21.1757 80.9185 21.3579C81.1114 21.5402 81.2384 21.7647 81.2993 22.0316C81.3616 22.292 81.3412 22.5946 81.2381 22.9396C81.0905 23.3952 80.84 23.789 80.4864 24.121C80.1396 24.4529 79.736 24.71 79.2756 24.8923C78.8233 25.068 78.3672 25.1559 77.9072 25.1559C77.4805 25.1559 77.1078 25.0778 76.7891 24.9216C76.4704 24.7653 76.2139 24.5538 76.0197 24.2869C75.8269 24.0136 75.7087 23.7044 75.6651 23.3594L77.0868 22.5393Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_449_221" x1="3.06168" y1="11.1303" x2="104.373" y2="-0.257765" gradientUnits="userSpaceOnUse">
<stop stop-color="#00C6FF"/>
<stop offset="1" stop-color="#0072FF"/>
</linearGradient>
</defs>
</svg>
              </a>
              <div class="textP">
                <a class="textPop" href=''>Меню</a>
                <br/>
                <a class="textYes" href=''>Главная</a>
                <br/>
                <a class="textYes" href=''>Каталог</a>
                <br/>
                <a class="textYes" href=''>Заказы</a>
                <br/>
                <a class="textYes" href=''>Избранное</a>
                <br/>
                <a class="textYes" href=''>Корзина</a>
              </div>
              <div class="textP">
                <a class="textPop" href=''>Для клиентов</a>
                <br/>
                <a class="textYes" href=''>Политика конфиденциальности</a>
                <br/>
                <a class="textYes" href=''>Доставка и оплата</a>
              </div>
              <div class="textP">
                <a class="textPop" href=''>Реквизиты</a>
                <br/>
                <a class="textYes" href=''>ИП Бархатова Анна Юрьевна</a>
                <br/>
                <a class="textYes" href=''>ИНН: 032384275700</a>
                <br/>
                <a class="textYes" href=''>ОГРН/ОГРНИП: 318502900056762</a>
              </div>
              <div class ="autors">
              <svg xmlns="http://www.w3.org/2000/svg" width="330" height="1" viewBox="0 0 330 1" fill="none"><path d="M1 -2.87621e-05C0.723846 -2.87863e-05 0.5 0.223829 0.5 0.499971C0.5 0.776114 0.723846 0.999971 1 0.999971L1 -287621e-05ZM330 0L1 -2.87621e-05L1 0.999971L330 1L330 0Z" fill="url(#paint0_linear_449_245)"/><defs><linearGradient id="paint0_linear_449_245" x1="222" y1="-5.50002" x2="76" y2="-3.99988" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1"stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>
              <div class = "des">design by<pre></pre></div>
              <div class="labekin">Labekin</div>
              <div class = "des1">code by<pre></pre></div>
              <div class="code">dolbaeb</div>
              </div>
            </div>
    </div>
    );
};

export default observer(BottomMenu);