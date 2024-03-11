import { FC, SVGProps } from 'react';

export const FolderIcon: FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
            <path
                d="M64 192v-72a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H408a40 40 0 0140 40v40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
            <path
                d="M479.9 226.55L463.68 392a40 40 0 01-39.93 40H88.25a40 40 0 01-39.93-40L32.1 226.55A32 32 0 0164 192h384.1a32 32 0 0131.8 34.55z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
        </svg>
    );
};
