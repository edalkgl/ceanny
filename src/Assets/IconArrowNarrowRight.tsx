import { IconType } from '~/Shared/iconShare';

const IconArrowNarrowRight = (props: IconType) => {
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
      <line x1={5} y1={12} x2={19} y2={12}></line>
      <line x1={15} y1={16} x2={19} y2={12}></line>
      <line x1={15} y1={8} x2={19} y2={12}></line>
    </svg>
  );
};

export default IconArrowNarrowRight;
