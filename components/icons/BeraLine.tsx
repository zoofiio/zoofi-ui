import { IconProps } from './types'

export default function Icon(p: IconProps) {
  return (
    <svg {...p} width='1em' height='1em' viewBox='0 0 54 54' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id='paint0_linear_44_1592' x1='8.5' y1='11' x2='44.5' y2='47.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#FF8080' />
          <stop offset='1' stopColor='#C62B23' />
        </linearGradient>
      </defs>
      <path
        d='M53.5 27C53.5 41.6355 41.6355 53.5 27 53.5C12.3645 53.5 0.5 41.6355 0.5 27C0.5 12.3645 12.3645 0.5 27 0.5C41.6355 0.5 53.5 12.3645 53.5 27Z'
        stroke={p.showOutline ? 'currentColor' : 'transparent'}
        fill={p.showBg ? 'url(#paint0_linear_44_1592)' : 'none'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M39.1541 20.3085C39.5732 21.2853 39.8971 22.5549 40.1351 23.7526C40.3699 24.9338 40.5265 26.0724 40.6076 26.8437C41.7095 27.4146 42.723 28.6292 43.3458 30.1025C44.0169 31.6901 44.2631 33.6423 43.645 35.554C42.3948 39.4212 37.7309 42.8511 26.8177 42.996C16.16 43.1376 11.5736 39.485 10.3472 35.4442C9.74258 33.4522 9.9802 31.4238 10.6553 29.8269C11.2596 28.3975 12.2538 27.2325 13.3938 26.8141C13.3427 25.5473 13.6011 24.2121 13.946 23.0478C14.2749 21.9375 14.6899 20.958 15.018 20.305C12.9758 18.0421 12.0779 16.0588 12.015 14.4242C11.949 12.7086 12.8063 11.4422 14.0716 10.7387C16.4525 9.415 20.2702 10.0781 22.1671 13.1841C24.0255 12.0886 26.03 11.8681 27.7916 12.0431C29.4455 12.2074 30.9066 12.7218 31.875 13.2128C33.9337 9.96492 37.6393 9.28803 39.9545 10.6942C41.1675 11.431 41.9642 12.7272 41.9134 14.4402C41.8647 16.0834 41.0397 18.0689 39.1541 20.3085ZM39.5139 11.4138C37.5747 10.236 34.2003 10.7929 32.3991 13.9825L32.1891 14.3544L31.8184 14.1407C30.9732 13.6533 29.458 13.0557 27.7076 12.8818C25.9621 12.7084 24.0106 12.9583 22.2514 14.1266L21.8595 14.3869L21.6416 13.9709C20.0612 10.9534 16.5532 10.3243 14.4841 11.4747C13.4753 12.0355 12.8077 13.0168 12.8606 14.3919C12.9146 15.7953 13.7229 17.6702 15.84 19.952L16.045 20.173L15.9018 20.4379C15.5865 21.0213 15.1182 22.069 14.7576 23.2863C14.3959 24.5072 14.1523 25.8665 14.2586 27.0851L14.2906 27.4516L13.9303 27.5327C13.0294 27.7353 12.0522 28.6945 11.4352 30.1541C10.8278 31.5907 10.6159 33.4168 11.1571 35.2003C12.2225 38.7103 16.3093 42.2926 26.8064 42.1532C37.6121 42.0097 41.7628 38.6262 42.8396 35.2956C43.3851 33.6084 43.1729 31.8655 42.5659 30.4296C41.9536 28.9809 40.968 27.908 40.0419 27.5083L39.8123 27.4092L39.7889 27.1609C39.7196 26.4248 39.5594 25.1959 39.3051 23.9163C39.0492 22.6294 38.7045 21.3246 38.276 20.4175L38.1591 20.1701L38.3383 19.963C40.2776 17.7207 41.0252 15.8436 41.0676 14.4153C41.1093 13.0071 40.4692 11.9941 39.5139 11.4138Z'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
