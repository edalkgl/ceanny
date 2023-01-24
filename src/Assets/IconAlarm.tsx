import { IconType } from '~/Shared/iconShare';

const IconAlarm = (props: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx={12} cy={13} r={7}></circle>
      <polyline points="12 10 12 13 14 13"></polyline>
      <line x1={7} y1={4} x2="4.25" y2={6}></line>
      <line x1={17} y1={4} x2="19.75" y2={6}></line>
    </svg>
  );
};

export default IconAlarm;
