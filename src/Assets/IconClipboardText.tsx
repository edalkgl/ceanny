import { IconType } from '~/Shared/iconShare';

const IconClipboardText = (props: IconType) => {
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <rect x={9} y={3} width={6} height={4} rx={2} />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
};

export default IconClipboardText;
