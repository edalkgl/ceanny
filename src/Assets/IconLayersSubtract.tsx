import { IconType } from '~/Shared/iconShare';

const IconLayersSubtract = (props: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-layers-subtract"
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
      <rect x={8} y={4} width={12} height={12} rx={2}></rect>
      <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2"></path>
    </svg>
  );
};

export default IconLayersSubtract;
