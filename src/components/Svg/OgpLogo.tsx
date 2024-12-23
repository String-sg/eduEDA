import { chakra } from '@chakra-ui/react'

type OgpLogoProps = React.SVGProps<SVGSVGElement>

const _OgpLogo: React.FC<OgpLogoProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 264" {...props}>
    <defs>
      <style>{`.cls-1{fill:#75f8cc;}.cls-2{fill:none;}`}</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="elements">
        <path
          className="cls-1"
          d="M175,28a31.64,31.64,0,0,1-30.07,21.4H90.33A55.81,55.81,0,0,0,89.78,161h1.91a28.67,28.67,0,0,0,20.3-8.3l20-19.8v0l-41.27-.2c-15.12-.08-28.25-12.5-28.17-27.63A27.5,27.5,0,0,1,90.19,77.71l54.6,0A59.72,59.72,0,0,0,182.87,64.3,58.84,58.84,0,0,0,191.26,56a59.7,59.7,0,0,0,12.87-28Z"
        />
        <path
          className="cls-1"
          d="M213.58,121.36a55.59,55.59,0,0,0-39.36-16.53h-1.91a28.62,28.62,0,0,0-20.3,8.29l-20,19.8,41.23.2c15.14.08,28.27,12.52,28.19,27.67a27.48,27.48,0,0,1-27.62,27.36l-56.25,0a59.64,59.64,0,0,0-38.14,13.46A57.17,57.17,0,0,0,71,209.91,59.39,59.39,0,0,0,58.52,236H88a31.69,31.69,0,0,1,29.43-19.59l56.23,0a55.79,55.79,0,0,0,39.91-95.07Z"
        />
        <rect className="cls-2" width="264" height="264" />
      </g>
    </g>
  </svg>
)

export const OgpLogo = chakra(_OgpLogo)
