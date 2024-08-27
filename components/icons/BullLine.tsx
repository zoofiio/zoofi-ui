import { IconProps } from './types'

export default function Icon(p: IconProps) {
  return (
    <svg {...p} width='1em' height='1em' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id='paint0_linear_44_1600' x1='12.5' y1='11' x2='44' y2='43.5' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#53BAFF' />
          <stop offset='1' stop-color='#1645BB' />
        </linearGradient>
      </defs>
      <path
        d='M53.5 27C53.5 41.6355 41.6355 53.5 27 53.5C12.3645 53.5 0.5 41.6355 0.5 27C0.5 12.3645 12.3645 0.5 27 0.5C41.6355 0.5 53.5 12.3645 53.5 27Z'
        stroke={p.showOutline ? 'currentColor' : 'transparent'}
        fill={p.showBg ? 'url(#paint0_linear_44_1600)' : 'none'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.3474 9.07977C34.2292 9.13328 34.1505 9.21789 34.1021 9.28349C34.0458 9.35981 34.0063 9.44316 33.9773 9.5153C33.9197 9.65894 33.8737 9.83709 33.8321 10.0167C33.8034 10.1411 33.7753 10.272 33.7458 10.4097C33.6844 10.6964 33.6165 11.0132 33.5224 11.3631C33.2608 12.336 32.8347 13.3986 31.9878 14.1381C30.5643 13.4942 28.9114 13.129 27.0019 13.129C25.0857 13.129 23.4277 13.4916 22.0005 14.1311C21.1591 13.3921 20.7356 12.3333 20.4758 11.3635C20.382 11.0134 20.3144 10.6968 20.2533 10.4099C20.2239 10.2724 20.196 10.1414 20.1674 10.0171C20.126 9.83752 20.0802 9.65934 20.0227 9.51565C19.9938 9.44349 19.9543 9.36008 19.898 9.2837C19.8496 9.21801 19.7709 9.13332 19.6526 9.07978C19.3705 8.9303 19.0842 9.01466 18.8906 9.13842C18.6959 9.2629 18.5307 9.45885 18.3953 9.67115C18.1193 10.1037 17.8847 10.7338 17.7639 11.4623C17.5835 12.5492 17.6482 13.9094 18.2591 15.2396C17.479 14.9434 16.5358 14.6668 15.5995 14.4831C14.7583 14.3179 13.8938 14.2216 13.1298 14.2596C12.3819 14.2968 11.6484 14.4664 11.1537 14.9136L11.0121 15.0416L11.0042 15.2328C10.9212 17.2345 12.0777 19.0173 13.1963 20.2573C13.7632 20.8856 14.3388 21.3952 14.7837 21.7489C15.0062 21.9258 15.1987 22.0657 15.3439 22.1634C15.3543 22.1704 15.3645 22.1772 15.3746 22.1839C14.1735 25.7501 13.9568 29.6469 14.1621 32.4229C13.2788 33.7506 12.8124 35.4017 12.9672 37.4227L12.9697 37.4558L12.977 37.4883C13.9368 41.7468 17.3059 43.6085 20.4192 44.405C23.1897 45.1137 25.861 45.0068 26.6498 44.9753C26.7458 44.9714 26.814 44.9687 26.851 44.9687C29.1359 44.9687 32.2563 44.7329 34.9731 43.6958C37.6984 42.6554 40.0829 40.7783 40.7276 37.4753C40.9987 36.0868 40.7984 34.3173 39.8338 32.663C40.0478 29.859 39.8312 25.8566 38.5957 22.2034C38.6151 22.1907 38.6353 22.1774 38.6561 22.1634C38.8013 22.0657 38.9938 21.9258 39.2163 21.7489C39.6612 21.3952 40.2368 20.8856 40.8037 20.2573C41.9223 19.0173 43.0788 17.2345 42.9958 15.2328L42.9879 15.0416L42.8463 14.9136C42.3516 14.4664 41.6181 14.2968 40.8702 14.2596C40.1062 14.2216 39.2417 14.3179 38.4005 14.4831C37.4642 14.6668 36.521 14.9434 35.7409 15.2396C36.3518 13.9094 36.4165 12.5492 36.2361 11.4623C36.1153 10.7338 35.8807 10.1037 35.6047 9.67115C35.4693 9.45885 35.3041 9.2629 35.1094 9.13842C34.9158 9.01466 34.6295 8.9303 34.3474 9.07977ZM38.2748 21.3225C38.3808 21.247 38.5093 21.1508 38.6544 21.0355C39.0678 20.7069 39.6053 20.231 40.1327 19.6464C41.1567 18.5113 42.0769 17.0399 42.0942 15.4802C41.8183 15.3076 41.3941 15.1965 40.8255 15.1682C40.1604 15.1351 39.3742 15.2188 38.5741 15.3759C37.2691 15.6321 36.0031 16.0673 35.2445 16.4396C36.3954 17.6236 37.2825 19.0432 37.9575 20.5624C38.0688 20.813 38.1745 21.0665 38.2748 21.3225ZM34.4431 15.6914C35.4012 14.3064 35.537 12.782 35.3429 11.6118C35.2374 10.9757 35.038 10.4686 34.8424 10.1621C34.8124 10.1151 34.7843 10.0756 34.7585 10.0426C34.7448 10.0942 34.7301 10.1539 34.7142 10.2226C34.691 10.3228 34.6659 10.4399 34.6381 10.5692C34.5744 10.8661 34.4967 11.2282 34.3966 11.6003C34.1449 12.5367 33.7186 13.683 32.846 14.575C33.2379 14.7978 33.6103 15.0433 33.9639 15.3092C34.1278 15.4325 34.2875 15.56 34.4431 15.6914ZM31.9622 15.1326L32.0532 15.249L32.1068 15.2067C32.5749 15.4516 33.0124 15.7301 33.4213 16.0375C35.0643 17.2729 36.2689 18.9939 37.1306 20.9332C38.6548 24.3637 39.0802 28.4208 38.9891 31.4824C38.8321 31.3004 38.6637 31.1217 38.4837 30.9468C36.3739 28.8977 32.713 27.442 26.8511 27.6839C24.4429 27.5836 20.8648 27.9295 17.9413 29.32C16.8501 29.839 15.8381 30.5093 15.0131 31.3667C14.9282 28.7543 15.2226 25.421 16.2656 22.3777H16.2862V22.3179C16.46 21.8163 16.6542 21.3227 16.8705 20.8418C17.7321 18.9265 18.9365 17.2286 20.5795 16.0102C20.984 15.7102 21.4165 15.4382 21.879 15.1986L21.9429 15.249L22.0499 15.1122C23.4255 14.4342 25.06 14.0387 27.0019 14.0387C28.9478 14.0387 30.585 14.4419 31.9622 15.1326ZM21.1404 14.5649C20.2745 13.6743 19.8513 12.5329 19.6014 11.6C19.5016 11.2276 19.4243 10.8656 19.3608 10.5687C19.3332 10.4394 19.3082 10.3223 19.2851 10.2222C19.2694 10.1539 19.2548 10.0944 19.2412 10.043C19.2155 10.0759 19.1875 10.1153 19.1576 10.1621C18.962 10.4686 18.7626 10.9757 18.6571 11.6118C18.4639 12.7764 18.5975 14.2917 19.5431 15.6715C19.7048 15.536 19.871 15.4049 20.0417 15.2783C20.3896 15.0202 20.7556 14.7818 21.1404 14.5649ZM18.7286 16.4265C17.9671 16.0571 16.7156 15.629 15.4259 15.3759C14.6258 15.2188 13.8396 15.1351 13.1745 15.1682C12.6059 15.1965 12.1817 15.3076 11.9058 15.4802C11.9231 17.0399 12.8433 18.5113 13.8673 19.6464C14.3947 20.231 14.9322 20.7069 15.3456 21.0355C15.4773 21.1402 15.5953 21.2291 15.6953 21.3011C15.8052 21.02 15.9218 20.7418 16.0453 20.4672C16.7148 18.9789 17.5925 17.5887 18.7286 16.4265ZM37.8543 31.6009C35.9778 29.7784 32.5879 28.3543 26.8698 28.5936L26.8508 28.5944L26.8317 28.5936C24.5111 28.4944 21.0824 28.8326 18.3288 30.1422C16.9566 30.7949 15.7741 31.6782 14.9702 32.8468C14.176 34.0013 13.7319 35.4621 13.8676 37.3198C14.7285 41.0742 17.6898 42.768 20.6427 43.5234C23.2591 44.1928 25.767 44.0981 26.607 44.0663C26.7195 44.0621 26.8021 44.059 26.851 44.059C29.0938 44.059 32.0859 43.8248 34.6514 42.8454C37.2085 41.8692 39.2763 40.1833 39.839 37.3003C40.1512 35.7008 39.7331 33.4256 37.8543 31.6009Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
