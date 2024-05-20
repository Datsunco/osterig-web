import { observer } from "mobx-react-lite";
import React from "react";
import "./Info.css"
import { useNavigate } from "react-router-dom";

const Info = observer(() => {
    const navigate = useNavigate()
    return (
        <div>
            <div class='info1'>
                <div class='info2'>
                    <div class='svg2'>
                        <svg width="88" height="29" viewBox="0 0 88 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M74.3152 0.200088C74.2767 0.310125 74.0748 0.444556 73.8663 0.498822C73.4903 0.596717 73.4685 0.642494 70.9748 6.55819C69.5929 9.83653 68.4594 12.5805 68.456 12.6558C68.4512 12.7626 68.8837 12.7863 70.4223 12.7633L72.3949 12.7338L74.8628 6.87734C76.2201 3.65627 77.3626 0.912 77.4017 0.779074C77.4624 0.573291 77.4267 0.537292 77.1619 0.537292C76.8892 0.537292 76.86 0.504195 76.9251 0.268646C76.9952 0.0152591 76.9722 0 76.521 0C76.1466 0 76.0263 0.0467444 75.9674 0.214917C75.9261 0.333121 75.8469 0.429834 75.7915 0.429834C75.7361 0.429834 75.6066 0.45917 75.5036 0.495061C75.3624 0.544277 75.3163 0.491407 75.3163 0.280144C75.3163 0.0257898 75.2736 0 74.8507 0C74.5006 0 74.3678 0.0496458 74.3152 0.200088ZM10.0769 0.454549C8.46993 0.964547 7.01954 2.04816 6.19662 3.35389C5.80439 3.97607 3.79474 8.66395 3.56459 9.49353C3.48894 9.76636 3.44809 10.3269 3.47366 10.7392C3.56115 12.1441 4.46269 12.8754 6.23071 12.9755C7.01706 13.02 7.37731 12.9861 8.02751 12.8067C9.55603 12.3848 11.0943 11.332 11.9441 10.1262C12.5552 9.25927 14.6255 4.41482 14.847 3.33368C15.1047 2.07588 14.6063 0.990122 13.5601 0.529878C12.7044 0.153451 11.1329 0.119494 10.0769 0.454549ZM23.8762 0.54417C21.7262 0.599296 21.4363 0.629707 20.7246 0.875035C19.1579 1.41523 18.1694 2.11199 17.4902 3.1552C16.5862 4.54356 16.6562 5.53261 17.7786 7.23368C18.5155 8.3506 18.5803 8.53425 18.3377 8.82094C18.0516 9.15901 17.6727 9.24143 16.3959 9.24304C15.6916 9.24401 15.0531 9.28065 14.9768 9.32471C14.8447 9.401 13.5171 12.4511 13.5171 12.6784C13.5171 12.7486 14.3354 12.7876 15.8068 12.7876C18.3514 12.7876 19.3732 12.6315 20.5405 12.065C21.8575 11.4257 23.0071 10.0386 23.1824 8.87693C23.306 8.05885 23.1369 7.51307 22.394 6.33167C21.6136 5.09042 21.5405 4.743 21.9766 4.34723C22.2494 4.09954 22.3456 4.08342 23.5521 4.08342C24.3974 4.08342 24.9038 4.03743 25.0319 3.9491C25.1909 3.83938 26.5399 0.870629 26.5399 0.630459C26.5399 0.494417 26.2216 0.4841 23.8762 0.54417ZM62.8073 0.509138L62.0781 0.547071L61.8787 0.998826C61.4181 2.04214 56.966 12.6701 56.966 12.7262C56.966 12.7599 57.8418 12.7876 58.9124 12.7876C60.3029 12.7876 60.8841 12.7506 60.947 12.6581C60.9955 12.5869 61.3912 11.6802 61.8266 10.6432C62.5951 8.81246 62.6283 8.7569 62.9736 8.7252C63.3717 8.68866 63.7142 8.92797 63.7142 9.24272C63.7142 9.35308 63.4211 10.1349 63.063 10.9801C62.7049 11.8253 62.4119 12.5777 62.4119 12.6522C62.4119 12.7555 62.8715 12.7876 64.3569 12.7876H66.302L66.9179 11.3637C67.6675 9.63086 67.8031 8.69704 67.407 7.99244C67.2738 7.75539 67.0782 7.4962 66.9724 7.41646C66.8013 7.28762 66.8482 7.23582 67.3951 6.94923C68.2963 6.47695 69.1944 5.60804 69.6511 4.76643C69.99 4.14188 70.0534 3.90128 70.0855 3.11898C70.1208 2.25674 70.1022 2.17346 69.7692 1.70193C69.5586 1.40384 69.1912 1.08168 68.8623 0.906735C68.3841 0.65238 68.1225 0.601123 66.9293 0.528051C65.5518 0.443804 64.1863 0.437463 62.8073 0.509138ZM83.8403 0.532564C82.1359 0.675807 80.6757 1.35301 79.4229 2.58126C78.4883 3.49745 78.1156 4.17337 76.8464 7.25345C75.967 9.38768 75.8722 9.69125 75.8705 10.376C75.8678 11.6028 76.5065 12.4642 77.7034 12.8475C78.4062 13.0725 79.8763 13.0447 80.7879 12.7892C82.2772 12.3716 83.8931 11.1593 84.7883 9.78807C85.2282 9.1142 86.4449 6.37594 86.4449 6.0598C86.4449 5.85369 82.9836 5.83919 82.8062 6.04454C82.7424 6.11847 82.4384 6.78332 82.1304 7.52209C81.5776 8.84921 81.2885 9.28323 80.8956 9.37651C80.598 9.44711 80.1703 9.27302 80.1703 9.08121C80.1703 8.75851 82.0781 4.3496 82.3097 4.13715C82.5198 3.94437 82.7297 3.91869 84.3465 3.88817C85.3378 3.86936 86.1996 3.80887 86.2616 3.75363C86.4476 3.58782 87.6175 0.70439 87.5311 0.624656C87.3998 0.503443 84.9225 0.441547 83.8403 0.532564ZM28.5081 0.623044C28.396 0.787671 27.1319 3.86593 27.1319 3.97424C27.1319 4.04151 27.6314 4.08342 28.4342 4.08342C29.1504 4.08342 29.7364 4.10008 29.7364 4.12039C29.7364 4.14081 28.9373 6.0584 27.9606 8.38176C26.9839 10.7051 26.1848 12.6481 26.1848 12.6994C26.1848 12.7507 27.0747 12.7795 28.1626 12.7633L30.1403 12.7338L31.5384 9.40262C32.3074 7.57045 33.1257 5.62567 33.3569 5.08074L33.7772 4.09008L35.1548 4.05989L36.5325 4.02969L37.2132 2.41782C37.5877 1.53128 37.8967 0.745547 37.8997 0.671616C37.9041 0.566306 36.8954 0.537292 33.2359 0.537292C30.6677 0.537292 28.5402 0.57587 28.5081 0.623044ZM43.292 0.738884C41.8226 1.12423 40.3993 1.95693 39.5431 2.93222C39.2726 3.2403 38.8284 3.92761 38.5558 4.45953C37.9875 5.56904 36.6823 8.72316 36.4748 9.48923C36.2012 10.4988 36.5742 11.6512 37.3483 12.187C38.1725 12.7577 38.5204 12.8255 40.8653 12.8729C42.8863 12.9137 43.07 12.9018 43.2424 12.718C43.4443 12.5028 44.5351 9.97107 44.5351 9.71779C44.5351 9.5911 44.2289 9.5638 42.8106 9.5638C41.8484 9.5638 40.9851 9.51459 40.8572 9.45259C40.5971 9.32621 40.5786 9.03575 40.7957 8.48922L40.9449 8.11312L43.1091 8.05939L45.2733 8.00566L45.7922 6.78579C46.0775 6.11492 46.3109 5.49833 46.3109 5.41569C46.3109 5.29276 45.9359 5.26547 44.2463 5.26547H42.1816L42.3591 4.79276C42.6733 3.95576 42.75 3.92943 45.0446 3.86851L47.0691 3.81478L47.6893 2.36409C48.0304 1.56621 48.3128 0.82872 48.3166 0.725345C48.323 0.552659 48.1475 0.537937 46.1629 0.544922C44.4847 0.55094 43.8438 0.594138 43.292 0.738884ZM50.6069 0.671616C50.4683 0.835812 45.6973 12.2067 45.6248 12.5458L45.573 12.7876H47.4665C48.8397 12.7876 49.3924 12.7506 49.4777 12.6532C49.5424 12.5794 49.9556 11.6605 50.396 10.6115L51.1965 8.70414H51.5713C52.4237 8.70414 52.425 9.09174 51.5793 11.0876C51.2211 11.9327 50.9281 12.6622 50.9281 12.7085C50.9281 12.7548 51.8194 12.7795 52.9086 12.7633L54.8892 12.7338L55.5285 11.2294C56.0588 9.9816 56.1689 9.60582 56.1743 9.02651C56.1808 8.31901 55.9912 7.81331 55.6123 7.528C55.5104 7.45117 55.4269 7.35263 55.4269 7.309C55.4269 7.26537 55.7657 7.03079 56.1799 6.78761C57.0178 6.29578 57.6156 5.74247 58.0709 5.03712C58.4037 4.52153 58.7422 3.47231 58.7411 2.95941C58.7392 2.02226 58.1429 1.21202 57.1444 0.789928C56.5742 0.549006 56.4402 0.539334 53.6359 0.538367C51.4417 0.537507 50.6923 0.570497 50.6069 0.671616ZM54.4055 3.77158C54.5954 4.26503 54.3856 4.84208 53.834 5.34262C53.4232 5.71561 53.2456 5.80276 52.8972 5.80276C52.6606 5.80276 52.4672 5.76611 52.4672 5.72141C52.4672 5.67671 52.6438 5.22936 52.8598 4.72742C53.0756 4.22548 53.2883 3.7272 53.3324 3.62017C53.3938 3.47069 53.5149 3.4333 53.8552 3.45898C54.209 3.48574 54.3195 3.54839 54.4055 3.77158ZM65.6878 3.52195C65.9494 3.67304 65.9988 4.18357 65.798 4.6608C65.5188 5.32446 65.0308 5.70809 64.3813 5.7746L63.8464 5.8293L64.3427 4.63544C64.8226 3.48047 64.8505 3.44157 65.194 3.44179C65.3894 3.4419 65.6116 3.478 65.6878 3.52195ZM10.7265 3.71495C10.8288 3.8079 10.9125 3.92868 10.9125 3.98338C10.9125 4.03818 10.4522 5.18315 9.88954 6.52789C8.77715 9.18652 8.50616 9.59626 7.89586 9.54188C7.61338 9.51674 7.53181 9.45366 7.5066 9.24143C7.48907 9.09367 7.94428 7.86102 8.51823 6.50231C9.45422 4.2862 9.60256 4.0068 9.95867 3.78899C10.4302 3.50046 10.4844 3.4953 10.7265 3.71495Z" fill="url(#paint0_linear_284_1265)" /><path d="M2.86983 24.7515L3.41779 23.396H6.87779L6.32983 24.7515H2.86983ZM5.07275 19.2809L5.6307 17.9254H9.0807L8.52275 19.2809H5.07275ZM4.04449 21.826L4.58581 20.4998H7.84581L7.30449 21.826H4.04449ZM4.5307 17.9254H6.1407L3.37983 24.7515H1.78983L4.5307 17.9254ZM11.7303 17.9254H13.4003L11.2207 23.3375H13.9507L13.3694 24.7515H8.97944L11.7303 17.9254ZM16.5366 24.7515L17.0846 23.396H20.5446L19.9966 24.7515H16.5366ZM18.7395 19.2809L19.2975 17.9254H22.7475L22.1895 19.2809H18.7395ZM17.7113 21.826L18.2526 20.4998H21.5126L20.9713 21.826H17.7113ZM18.1975 17.9254H19.8075L17.0466 24.7515H15.4566L18.1975 17.9254ZM25.4517 21.3385C25.3363 21.6115 25.278 21.8683 25.2766 22.1088C25.282 22.3494 25.3373 22.5606 25.4426 22.7427C25.5479 22.9247 25.6988 23.0677 25.8952 23.1717C26.0915 23.2758 26.333 23.3278 26.6197 23.3278C27.0849 23.3343 27.5182 23.2465 27.9195 23.0645C28.3209 22.8824 28.6941 22.6777 29.0391 22.4501L28.3681 24.2152C28.0075 24.4232 27.6358 24.5922 27.2529 24.7222C26.8715 24.8457 26.4508 24.9075 25.9908 24.9075C25.4508 24.9075 24.9881 24.8165 24.6028 24.6345C24.2175 24.4524 23.9218 24.1989 23.7156 23.8738C23.511 23.5423 23.3974 23.162 23.3749 22.7329C23.359 22.3039 23.4446 21.839 23.6317 21.3385C23.8284 20.8249 24.0995 20.3503 24.4451 19.9147C24.7974 19.4792 25.2031 19.1021 25.6621 18.7836C26.1212 18.465 26.614 18.218 27.1405 18.0425C27.6685 17.8604 28.2092 17.7694 28.7626 17.7694C29.2026 17.7694 29.5685 17.8312 29.8605 17.9547C30.1605 18.0717 30.4255 18.2407 30.6553 18.4618L29.972 20.2365C29.8259 19.97 29.6213 19.7555 29.3583 19.5929C29.0967 19.4239 28.7525 19.3394 28.3259 19.3394C28.031 19.3459 27.7359 19.3979 27.4404 19.4954C27.1516 19.5929 26.8772 19.7295 26.6174 19.905C26.3575 20.0805 26.1261 20.2918 25.9233 20.5388C25.722 20.7794 25.5648 21.0459 25.4517 21.3385ZM31.9567 19.3979L32.5613 17.9254H37.9613L37.3667 19.3979H35.5067L33.3404 24.7515H31.6804L33.8367 19.3979H31.9567ZM40.2619 21.6603H41.9419L42.8096 24.7515H40.9196L40.2619 21.6603ZM40.0405 17.9254H41.7105L38.9496 24.7515H37.2996L40.0405 17.9254ZM40.5136 19.3199L41.0705 17.9254H42.4805C43.0005 17.9254 43.4224 18.0197 43.7462 18.2082C44.0715 18.3903 44.2824 18.6503 44.379 18.9884C44.477 19.3199 44.4484 19.71 44.2931 20.1585C44.1231 20.6136 43.863 21.0102 43.5128 21.3482C43.1642 21.6798 42.7558 21.9366 42.2878 22.1186C41.8212 22.2941 41.3213 22.3819 40.788 22.3819H39.268L39.7982 21.1044H41.0882C41.2949 21.1044 41.4923 21.0719 41.6804 21.0069C41.8766 20.9354 42.0495 20.8346 42.199 20.7046C42.3501 20.5681 42.4677 20.4023 42.552 20.2073C42.6201 20.0253 42.6355 19.8692 42.5984 19.7392C42.5679 19.6092 42.4908 19.5084 42.3671 19.4369C42.2433 19.3654 42.0822 19.3264 41.8836 19.3199H40.5136ZM47.6643 21.3385C47.5638 21.605 47.5054 21.8618 47.4893 22.1088C47.4747 22.3494 47.5052 22.5672 47.5809 22.7622C47.6647 22.9507 47.7967 23.1035 47.9767 23.2205C48.165 23.331 48.4057 23.3863 48.6991 23.3863C48.9976 23.3928 49.2887 23.344 49.5723 23.24C49.8559 23.136 50.1192 22.9897 50.362 22.8012C50.613 22.6062 50.8332 22.3851 51.0227 22.1381C51.2203 21.8845 51.3775 21.618 51.4943 21.3385C51.5949 21.0719 51.6525 20.8184 51.6671 20.5778C51.6833 20.3308 51.6502 20.1098 51.5678 19.9147C51.4921 19.7197 51.3602 19.5669 51.1719 19.4564C50.9904 19.3459 50.7503 19.2874 50.4518 19.2809C50.1518 19.2809 49.8593 19.3362 49.5741 19.4467C49.2905 19.5507 49.0239 19.697 48.7744 19.8855C48.5316 20.074 48.3114 20.2951 48.1138 20.5486C47.9243 20.7956 47.7745 21.0589 47.6643 21.3385ZM45.9043 21.3385C46.0995 20.8314 46.3692 20.3633 46.7134 19.9343C47.0657 19.4987 47.4687 19.1184 47.9226 18.7933C48.3764 18.4683 48.86 18.218 49.3732 18.0425C49.8945 17.8604 50.4219 17.7694 50.9552 17.7694C51.4819 17.7694 51.9305 17.8637 52.301 18.0522C52.6796 18.2342 52.9679 18.491 53.1659 18.8226C53.3721 19.1476 53.4823 19.5279 53.4967 19.9635C53.5126 20.3926 53.4318 20.8509 53.2543 21.3385C53.0591 21.8455 52.7846 22.3201 52.4309 22.7622C52.0852 23.1977 51.684 23.5846 51.2272 23.9226C50.7719 24.2542 50.2835 24.5109 49.7622 24.693C49.2408 24.875 48.7102 24.966 48.1702 24.966C47.6302 24.966 47.1749 24.8718 46.8044 24.6832C46.4354 24.4882 46.1519 24.2249 45.9539 23.8934C45.7573 23.5553 45.6519 23.1685 45.6375 22.7329C45.6313 22.2909 45.7202 21.826 45.9043 21.3385ZM61.6785 17.9254H63.2885L60.4045 25.0733L57.4028 20.8996L55.8476 24.7515H54.2376L57.1116 17.6036L60.1234 21.7773L61.6785 17.9254ZM66.0338 17.9254H67.7338L64.983 24.7515H63.293L66.0338 17.9254ZM70.5341 21.3385C70.4187 21.6115 70.3604 21.8683 70.3591 22.1088C70.3644 22.3494 70.4198 22.5606 70.5251 22.7427C70.6304 22.9247 70.7812 23.0677 70.9776 23.1717C71.1739 23.2758 71.4155 23.3278 71.7021 23.3278C72.1673 23.3343 72.6006 23.2465 73.002 23.0645C73.4033 22.8824 73.7765 22.6777 74.1215 22.4501L73.4505 24.2152C73.0899 24.4232 72.7182 24.5922 72.3353 24.7222C71.9539 24.8457 71.5332 24.9075 71.0732 24.9075C70.5332 24.9075 70.0706 24.8165 69.6853 24.6345C69.2999 24.4524 69.0042 24.1989 68.7981 23.8738C68.5934 23.5423 68.4798 23.162 68.4573 22.7329C68.4414 22.3039 68.527 21.839 68.7141 21.3385C68.9108 20.8249 69.1819 20.3503 69.5276 19.9147C69.8799 19.4792 70.2855 19.1021 70.7446 18.7836C71.2036 18.465 71.6964 18.218 72.2229 18.0425C72.751 17.8604 73.2916 17.7694 73.845 17.7694C74.285 17.7694 74.651 17.8312 74.9429 17.9547C75.243 18.0717 75.5079 18.2407 75.7377 18.4618L75.0545 20.2365C74.9083 19.97 74.7038 19.7555 74.4407 19.5929C74.1791 19.4239 73.8349 19.3394 73.4083 19.3394C73.1135 19.3459 72.8183 19.3979 72.5228 19.4954C72.234 19.5929 71.9597 19.7295 71.6998 19.905C71.4399 20.0805 71.2086 20.2918 71.0058 20.5388C70.8045 20.7794 70.6472 21.0459 70.5341 21.3385ZM77.5506 22.3526C77.6107 22.5867 77.6868 22.7947 77.7788 22.9767C77.8789 23.1522 78.0071 23.292 78.1635 23.396C78.3265 23.5 78.5288 23.5488 78.7703 23.5423C78.9503 23.5423 79.1202 23.513 79.2802 23.4545C79.4416 23.3895 79.5782 23.3018 79.69 23.1912C79.8099 23.0742 79.8928 22.9442 79.9386 22.8012C80.0037 22.6322 79.9988 22.4924 79.9239 22.3819C79.849 22.2714 79.7278 22.1738 79.5604 22.0893C79.3929 22.0048 79.201 21.9106 78.9846 21.8065C78.8209 21.735 78.6556 21.6408 78.4889 21.5237C78.3303 21.4002 78.1902 21.254 78.0686 21.0849C77.9536 20.9159 77.8746 20.7209 77.8315 20.4998C77.7951 20.2788 77.8219 20.0285 77.9121 19.749C78.0452 19.3394 78.2716 18.9884 78.5914 18.6958C78.9127 18.3968 79.2844 18.1692 79.7065 18.0132C80.1367 17.8507 80.5785 17.7694 81.0319 17.7694C81.4519 17.7694 81.7997 17.8377 82.0753 17.9742C82.351 18.1107 82.5656 18.296 82.719 18.53C82.874 18.7576 82.9779 19.0046 83.0307 19.2711L81.5478 19.944C81.5003 19.801 81.4365 19.671 81.3564 19.5539C81.2778 19.4304 81.1766 19.3329 81.0529 19.2614C80.9291 19.1899 80.7706 19.1541 80.5773 19.1541C80.4239 19.1541 80.2821 19.1769 80.1517 19.2224C80.0214 19.2679 79.9059 19.3362 79.8052 19.4272C79.7127 19.5117 79.6498 19.6125 79.6165 19.7295C79.5618 19.853 79.56 19.9635 79.6112 20.061C79.6639 20.152 79.7447 20.2365 79.8536 20.3146C79.9692 20.3926 80.0996 20.4641 80.2449 20.5291C80.3968 20.5941 80.5487 20.6591 80.7006 20.7241C80.974 20.8411 81.2033 20.9907 81.3886 21.1727C81.5806 21.3547 81.7063 21.579 81.7658 21.8455C81.8267 22.1056 81.8047 22.4079 81.6997 22.7524C81.5497 23.2075 81.297 23.6008 80.9416 23.9324C80.593 24.2639 80.188 24.5207 79.7266 24.7027C79.2734 24.8783 78.8168 24.966 78.3568 24.966C77.9301 24.966 77.5579 24.888 77.24 24.732C76.9221 24.576 76.6668 24.3647 76.474 24.0981C76.2827 23.8251 76.1662 23.5163 76.1245 23.1717L77.5506 22.3526Z" fill="white" /><defs><linearGradient id="paint0_linear_284_1265" x1="3.46604" y1="11" x2="104.902" y2="-0.555074" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF" /><stop offset="1" stopColor="#0072FF" /></linearGradient></defs></svg>
                    </div>
                    <h2 class="h2css">МАГАЗИН ЭЛЕКТРОННЫХ КОМПОНЕНТОВ</h2>
                    <button onClick={() => navigate("/catalog")} class="katalog"><div class="lol">ПЕРЕЙТИ В КАТАЛОГ</div>
                        <div class="strelka">
                        </div>
                    </button>
                </div>
            </div>
            <div class="description">
                    <div class="op1">
                        <div class="svgIcons1">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.71429 30.2857H30V34H7.71429V30.2857ZM4 21H22.5714V24.7143H4V21Z" fill="#0071E3" />
                                <path d="M55.8478 30.7638L50.2112 17.7196C50.0665 17.3843 49.8258 17.0986 49.5188 16.8978C49.2119 16.6971 48.8522 16.5902 48.4845 16.5904H42.8479V12.8635C42.8479 12.3692 42.6499 11.8953 42.2976 11.5458C41.9452 11.1963 41.4673 11 40.969 11H10.907V14.7269H39.0901V38.1245C38.234 38.6175 37.4847 39.2738 36.8856 40.0555C36.2864 40.8371 35.8492 41.7287 35.5992 42.6788H23.7923C23.335 40.9222 22.2475 39.3913 20.7335 38.3731C19.2196 37.3548 17.3832 36.9192 15.5685 37.1478C13.7539 37.3764 12.0856 38.2535 10.8764 39.6148C9.66714 40.9761 9 42.728 9 44.5422C9 46.3564 9.66714 48.1084 10.8764 49.4696C12.0856 50.8309 13.7539 51.708 15.5685 51.9366C17.3832 52.1652 19.2196 51.7296 20.7335 50.7114C22.2475 49.6932 23.335 48.1623 23.7923 46.4057H35.5992C36.0079 48.005 36.9426 49.4234 38.2555 50.4366C39.5683 51.4499 41.1844 52 42.8479 52C44.5114 52 46.1274 51.4499 47.4403 50.4366C48.7531 49.4234 49.6879 48.005 50.0966 46.4057H54.1211C54.6194 46.4057 55.0973 46.2093 55.4497 45.8599C55.802 45.5104 56 45.0364 56 44.5422V31.498C56.0001 31.2456 55.9483 30.9958 55.8478 30.7638ZM16.5436 48.2691C15.8004 48.2691 15.0739 48.0505 14.456 47.641C13.838 47.2315 13.3564 46.6494 13.0719 45.9684C12.7875 45.2874 12.7131 44.5381 12.8581 43.8151C13.0031 43.0922 13.361 42.4281 13.8865 41.9069C14.412 41.3857 15.0816 41.0307 15.8105 40.8869C16.5395 40.7431 17.295 40.8169 17.9817 41.099C18.6683 41.3811 19.2552 41.8588 19.6681 42.4716C20.081 43.0845 20.3014 43.8051 20.3014 44.5422C20.3004 45.5303 19.9042 46.4777 19.1997 47.1764C18.4952 47.8752 17.54 48.2681 16.5436 48.2691ZM42.8479 20.3173H47.2444L51.2727 29.6346H42.8479V20.3173ZM42.8479 48.2691C42.1047 48.2691 41.3781 48.0505 40.7602 47.641C40.1422 47.2315 39.6606 46.6494 39.3762 45.9684C39.0918 45.2874 39.0173 44.5381 39.1623 43.8151C39.3073 43.0922 39.6652 42.4281 40.1908 41.9069C40.7163 41.3857 41.3858 41.0307 42.1148 40.8869C42.8437 40.7431 43.5993 40.8169 44.2859 41.099C44.9725 41.3811 45.5594 41.8588 45.9723 42.4716C46.3852 43.0845 46.6056 43.8051 46.6056 44.5422C46.6046 45.5303 46.2084 46.4777 45.5039 47.1764C44.7994 47.8752 43.8442 48.2681 42.8479 48.2691ZM52.2423 42.6788H50.0966C49.6827 41.0826 48.7465 39.6677 47.4347 38.656C46.1228 37.6443 44.5096 37.093 42.8479 37.0884V33.3615H52.2423V42.6788Z" fill="#0071E3" />
                            </svg>
                        </div><div class="mrtInfo1"></div>
                        <h class="text1">Быстрая доставка</h> по Москве. Отправка <h class="text1">в тот же день</h> в другие города
                    </div>
                    <div class="op">
                        <div class="svgIcons2">
                            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.2134 14.2325C24.4128 13.9225 21.5865 13.9225 18.7859 14.2325C16.6931 14.4652 14.9964 16.1127 14.7493 18.2279C14.4169 21.0664 14.4169 23.934 14.7493 26.7725C14.9964 28.89 16.6931 30.5329 18.7859 30.7679C21.564 31.0774 24.4353 31.0774 27.2134 30.7679C28.2389 30.654 29.1958 30.1973 29.9286 29.472C30.6614 28.7467 31.1271 27.7954 31.25 26.7725C31.5833 23.9336 31.5833 21.0668 31.25 18.2279C31.1271 17.205 30.6614 16.2537 29.9286 15.5284C29.1958 14.8031 28.2389 14.3464 27.2134 14.2325ZM19.1728 17.702C21.6945 17.4228 24.3048 17.4228 26.8265 17.702C27.0668 17.7285 27.2911 17.8346 27.4639 18.0033C27.6367 18.172 27.7479 18.3936 27.7798 18.6328C28.0804 21.2018 28.0804 23.7986 27.7798 26.3676C27.7478 26.6071 27.6363 26.829 27.463 26.9978C27.2898 27.1665 27.0648 27.2724 26.8242 27.2984C24.2815 27.5794 21.7155 27.5794 19.1728 27.2984C18.9326 27.2719 18.7082 27.1658 18.5355 26.9971C18.3627 26.8284 18.2515 26.6068 18.2196 26.3676C17.919 23.7981 17.919 21.2023 18.2196 18.6328C18.2516 18.3933 18.3631 18.1714 18.5364 18.0026C18.7096 17.8339 18.9345 17.728 19.1752 17.702H19.1728Z" fill="#9747FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M32.3462 1.76923C32.3462 1.3 32.1598 0.849991 31.828 0.518196C31.4962 0.1864 31.0462 0 30.5769 0C30.1077 0 29.6577 0.1864 29.3259 0.518196C28.9941 0.849991 28.8077 1.3 28.8077 1.76923V7.72328C27.6297 7.6406 26.4498 7.58554 25.2692 7.55815V4.12821C25.2692 3.65898 25.0828 3.20897 24.751 2.87717C24.4192 2.54537 23.9692 2.35897 23.5 2.35897C23.0308 2.35897 22.5808 2.54537 22.249 2.87717C21.9172 3.20897 21.7308 3.65898 21.7308 4.12821V7.55815C20.5502 7.58554 19.3703 7.6406 18.1923 7.72328V1.76923C18.1923 1.3 18.0059 0.849991 17.6741 0.518196C17.3423 0.1864 16.8923 0 16.4231 0C15.9538 0 15.5038 0.1864 15.172 0.518196C14.8402 0.849991 14.6538 1.3 14.6538 1.76923V8.07241C13.1455 8.34653 11.7575 9.07649 10.6768 10.1639C9.59618 11.2513 8.87488 12.6438 8.61016 14.1538H2.26923C1.8 14.1538 1.34999 14.3402 1.0182 14.672C0.6864 15.0038 0.5 15.4538 0.5 15.9231C0.5 16.3923 0.6864 16.8423 1.0182 17.1741C1.34999 17.5059 1.8 17.6923 2.26923 17.6923H8.25395C8.16903 18.8718 8.11241 20.0513 8.08174 21.2308H4.62821C4.15898 21.2308 3.70897 21.4172 3.37717 21.749C3.04537 22.0808 2.85897 22.5308 2.85897 23C2.85897 23.4692 3.04537 23.9192 3.37717 24.251C3.70897 24.5828 4.15898 24.7692 4.62821 24.7692H8.08174C8.11241 25.9487 8.16903 27.1282 8.25395 28.3077H2.26923C1.8 28.3077 1.34999 28.4941 1.0182 28.8259C0.6864 29.1577 0.5 29.6077 0.5 30.0769C0.5 30.5462 0.6864 30.9962 1.0182 31.328C1.34999 31.6598 1.8 31.8462 2.26923 31.8462H8.61016C8.87488 33.3562 9.59618 34.7487 10.6768 35.8361C11.7575 36.9235 13.1455 37.6535 14.6538 37.9276V44.2308C14.6538 44.7 14.8402 45.15 15.172 45.4818C15.5038 45.8136 15.9538 46 16.4231 46C16.8923 46 17.3423 45.8136 17.6741 45.4818C18.0059 45.15 18.1923 44.7 18.1923 44.2308V38.2767C19.3671 38.3593 20.5489 38.4159 21.7308 38.4418V41.8718C21.7308 42.341 21.9172 42.791 22.249 43.1228C22.5808 43.4546 23.0308 43.641 23.5 43.641C23.9692 43.641 24.4192 43.4546 24.751 43.1228C25.0828 42.791 25.2692 42.341 25.2692 41.8718V38.4418C26.4498 38.4145 27.6297 38.3595 28.8077 38.2767V44.2308C28.8077 44.7 28.9941 45.15 29.3259 45.4818C29.6577 45.8136 30.1077 46 30.5769 46C31.0462 46 31.4962 45.8136 31.828 45.4818C32.1598 45.15 32.3462 44.7 32.3462 44.2308V37.9276C33.8545 37.6535 35.2425 36.9235 36.3232 35.8361C37.4038 34.7487 38.1251 33.3562 38.3898 31.8462H44.7308C45.2 31.8462 45.65 31.6598 45.9818 31.328C46.3136 30.9962 46.5 30.5462 46.5 30.0769C46.5 29.6077 46.3136 29.1577 45.9818 28.8259C45.65 28.4941 45.2 28.3077 44.7308 28.3077H38.7461C38.831 27.1282 38.8876 25.9487 38.9183 24.7692H42.3718C42.841 24.7692 43.291 24.5828 43.6228 24.251C43.9546 23.9192 44.141 23.4692 44.141 23C44.141 22.5308 43.9546 22.0808 43.6228 21.749C43.291 21.4172 42.841 21.2308 42.3718 21.2308H38.9183C38.8876 20.0513 38.831 18.8718 38.7461 17.6923H44.7308C45.2 17.6923 45.65 17.5059 45.9818 17.1741C46.3136 16.8423 46.5 16.3923 46.5 15.9231C46.5 15.4538 46.3136 15.0038 45.9818 14.672C45.65 14.3402 45.2 14.1538 44.7308 14.1538H38.3898C38.1251 12.6438 37.4038 11.2513 36.3232 10.1639C35.2425 9.07649 33.8545 8.34653 32.3462 8.07241V1.76923ZM15.5573 11.5118C20.8363 10.9267 26.1637 10.9267 31.4427 11.5118C33.2662 11.717 34.7216 13.1584 34.9316 14.9535C35.5569 20.2996 35.5569 25.7004 34.9316 31.0465C34.8208 31.9287 34.4161 32.7479 33.7827 33.3719C33.1493 33.9959 32.3241 34.3883 31.4403 34.4858C26.1621 35.0706 20.8355 35.0706 15.5573 34.4858C14.674 34.3878 13.8493 33.9952 13.2164 33.3712C12.5834 32.7473 12.1791 31.9283 12.0684 31.0465C11.4432 25.7004 11.4432 20.2996 12.0684 14.9535C12.1792 14.0713 12.5839 13.2521 13.2173 12.6281C13.8507 12.0041 14.6759 11.6117 15.5597 11.5142L15.5573 11.5118Z" fill="#9747FF" />
                            </svg>
                        </div><div class="mrtInfo2"></div>
                        Более <h class="text2">200 тыс.</h> компонентов в наличии
                    </div>
                    <div class="op">
                        <div class="svgIcons3">
                            <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.5294 29.25L18.5 26V50.015C18.5002 50.2759 18.5506 50.5342 18.6484 50.7751C18.7462 51.0161 18.8894 51.235 19.0698 51.4193C19.2503 51.6036 19.4644 51.7498 19.7001 51.8494C19.9357 51.949 20.1882 52.0002 20.4432 52H51.5536C51.8088 52.0007 52.0617 51.9498 52.2977 51.8504C52.5337 51.7509 52.7482 51.6048 52.929 51.4205C53.1098 51.2361 53.2533 51.0171 53.3513 50.7759C53.4492 50.5347 53.4998 50.2762 53.5 50.015V41.1667L36.5294 29.25Z" fill="#185C37" /><path d="M36.5294 9H20.4432C20.1882 8.99979 19.9357 9.04908 19.7001 9.14505C19.4644 9.24102 19.2503 9.3818 19.0698 9.55934C18.8894 9.73688 18.7462 9.94772 18.6484 10.1798C18.5506 10.4119 18.5002 10.6607 18.5 10.912V19.4348L36.5294 29.8696L46.0759 33L53.5 29.8696V19.4348L36.5294 9Z" fill="#21A366" /><path d="M18.5 19H36.5V30H18.5V19Z" fill="#107C41" /><path opacity="0.1" d="M31.5353 17H18.5V44H31.5353C32.0547 43.9974 32.5522 43.7882 32.92 43.4178C33.2877 43.0474 33.4961 42.5456 33.5 42.0211V18.9789C33.4961 18.4544 33.2877 17.9526 32.92 17.5822C32.5522 17.2118 32.0547 17.0026 31.5353 17Z" fill="black" />
                                <path opacity="0.2" d="M29.6663 18H18.5V45H29.6663C30.1511 44.9974 30.6154 44.7882 30.9586 44.4178C31.3019 44.0474 31.4964 43.5456 31.5 43.0211V19.9789C31.4964 19.4544 31.3019 18.9526 30.9586 18.5822C30.6154 18.2118 30.1511 18.0026 29.6663 18Z" fill="black" /><path opacity="0.2" d="M29.6663 18H18.5V43H29.6663C30.1511 42.9974 30.6154 42.7869 30.9586 42.4141C31.3019 42.0413 31.4964 41.5362 31.5 41.0084V19.9916C31.4964 19.4638 31.3019 18.9587 30.9586 18.5859C30.6154 18.2131 30.1511 18.0026 29.6663 18Z" fill="black" /><path opacity="0.2" d="M28.6664 18H18.5V43H28.6664C29.1511 42.9974 29.6154 42.7869 29.9587 42.4141C30.3019 42.0413 30.4964 41.5362 30.5 41.0084V19.9916C30.4964 19.4638 30.3019 18.9587 29.9587 18.5859C29.6154 18.2131 29.1511 18.0026 28.6664 18Z" fill="black" /><path d="M9.41693 18H28.5831C29.0908 17.9996 29.5779 18.2098 29.9373 18.5847C30.2968 18.9595 30.4991 19.4681 30.5 19.9989V40.0011C30.4991 40.5319 30.2968 41.0405 29.9373 41.4153C29.5779 41.7902 29.0908 42.0004 28.5831 42H9.41693C9.16549 42.0004 8.91642 41.9491 8.68397 41.8488C8.45152 41.7486 8.24024 41.6015 8.06222 41.4158C7.88419 41.2302 7.74291 41.0097 7.64644 40.767C7.54997 40.5242 7.50021 40.264 7.5 40.0011V19.9989C7.50021 19.736 7.54997 19.4758 7.64644 19.233C7.74291 18.9903 7.88419 18.7698 8.06222 18.5842C8.24024 18.3985 8.45152 18.2514 8.68397 18.1512C8.91642 18.0509 9.16549 17.9996 9.41693 18Z" fill="url(#paint0_linear_284_1124)" />
                                <path d="M13.5 36.995L17.4857 30.479L13.8349 24H16.7667L18.7587 28.1488C18.9429 28.5414 19.0762 28.8333 19.1365 29.0279H19.1635C19.2937 28.7125 19.4317 28.4088 19.5762 28.1119L21.7063 24.0067H24.4048L20.6603 30.4488L24.5 37H21.6286L19.327 32.4519C19.2201 32.2564 19.1293 32.0515 19.0556 31.8396H19.0175C18.9503 32.0461 18.8609 32.2437 18.7508 32.4284L16.381 36.995H13.5Z" fill="white" /><path d="M51.5518 9H36.5V19H53.5V10.8323C53.4998 10.5914 53.4492 10.3528 53.3512 10.1303C53.2531 9.90777 53.1095 9.70566 52.9286 9.53549C52.7477 9.36533 52.533 9.23045 52.2967 9.13856C52.0605 9.04668 51.8074 8.9996 51.5518 9Z" fill="#33C481" /><path d="M36.5 30H53.5V41H36.5V30Z" fill="#107C41" /><defs><linearGradient id="paint0_linear_284_1124" x1="11.504" y1="16.4291" x2="27.5158" y2="42.9553" gradientUnits="userSpaceOnUse"><stop stopColor="#18884F" /><stop offset="0.5" stopColor="#117E43" /><stop offset="1" stopColor="#0B6631" /></linearGradient></defs></svg>
                        </div><div class="mrtInfo3"></div>
                        Загрузите <h class="text3">список деталей</h>, чтобы проверить цены и наличие
                    </div>
                    <div class="op">
                        <div class="svgIcons4">
                            <svg width="60" height="60" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.55676 0C8.08528 0.000150747 7.62114 0.114307 7.20554 0.332334C6.78994 0.55036 6.43576 0.86551 6.17442 1.2498L0.302029 9.8734C-0.0563027 10.4022 -0.0988444 11.0783 0.190767 11.6455C3.40445 17.9395 7.87047 23.5409 13.3263 28.1204L16.1897 30.5255C16.5545 30.8317 17.0191 31 17.4995 31C17.98 31 18.4445 30.8317 18.8093 30.5255L21.6727 28.122C27.1294 23.5422 31.596 17.9402 34.8099 11.6455C35.0995 11.0783 35.0553 10.4022 34.697 9.8734L28.8213 1.2498C28.56 0.866032 28.206 0.551337 27.7907 0.333608C27.3754 0.115879 26.9117 0.00184075 26.4406 0.00160219L8.55676 0ZM8.21642 2.58131C8.25384 2.52654 8.30447 2.48165 8.36384 2.45063C8.4232 2.41961 8.48947 2.4034 8.55676 2.40346H12.3855L9.25215 9.76765C9.18038 9.93613 9.12558 10.1111 9.08853 10.29C7.9362 10.2058 6.78526 10.1043 5.63611 9.98556L3.33722 9.75002L8.21642 2.58131ZM3.23086 12.1551C6.1669 17.43 10.0425 22.1482 14.6746 26.0871L9.5614 12.7335C8.16635 12.6397 6.77315 12.5211 5.38249 12.3778L3.23086 12.1551ZM12.2399 12.8825L17.4987 26.6207L22.7591 12.8825C19.254 13.0386 15.7434 13.0386 12.2383 12.8825H12.2399ZM25.4393 12.7335L20.3261 26.0871C24.9582 22.1482 28.8338 17.43 31.7698 12.1551L29.6182 12.3778C28.2274 12.5204 26.835 12.639 25.4393 12.7335ZM31.6618 9.75002L29.3613 9.98716C28.2121 10.1059 27.0612 10.2074 25.9089 10.2916C25.8725 10.1122 25.8182 9.9367 25.7469 9.76765L22.6119 2.40346H26.4406C26.5079 2.4034 26.5742 2.41961 26.6336 2.45063C26.6929 2.48165 26.7436 2.52654 26.781 2.58131L31.6618 9.75002ZM23.3776 10.447C19.4622 10.6457 15.5401 10.6457 11.623 10.447L15.0444 2.40346H19.953L23.376 10.447H23.3776Z" fill="#FF9F47" /></svg>
                        </div><div class="mrtInfo4"></div>
                        <h class="text4">Высококачественные</h> компоненты
                    </div>
            </div>
        </div>
    );
});

export default Info;