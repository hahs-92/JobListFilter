import * as React from "react"

export default function IconManage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={88}
      height={88}
      {...props}
    >
      <defs>
        <filter
          id="prefix__b"
          width="139.8%"
          height="139.8%"
          x="-19.9%"
          y="-19.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation={17.5}
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0452633304 0"
          />
        </filter>
        <circle id="prefix__a" cx={44} cy={44} r={44} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#F3603C" xlinkHref="#prefix__a" />
        <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
        <g fill="#FFF" transform="translate(13 39)">
          <path
            fillRule="nonzero"
            d="M16.806 7.004v-3.44c0-.657.154-1.175.461-1.555.308-.379.693-.568 1.155-.568.907 0 1.36.657 1.36 1.971v3.592h1.588V3.012c0-1.006-.21-1.759-.631-2.257-.42-.499-1.022-.748-1.804-.748-.513 0-.982.098-1.408.293a2.873 2.873 0 00-1.075.851h-.028c-.411-.763-1.1-1.144-2.067-1.144-.407 0-.798.09-1.175.272a2.926 2.926 0 00-.989.783h-.02V.11h-1.589v6.887h1.588V3.564c0-.657.157-1.175.469-1.555a1.48 1.48 0 011.196-.568c.92 0 1.38.657 1.38 1.971v3.592h1.589zm8.862.103c.944 0 1.679-.345 2.206-1.034h.021v.924h1.519V.11h-1.588v.828h-.028c-.527-.62-1.242-.931-2.143-.931a3.282 3.282 0 00-2.387 1.006c-.296.313-.53.692-.7 1.138a3.967 3.967 0 00-.257 1.434c0 .523.086 1.006.257 1.447.17.441.404.814.7 1.117a3.08 3.08 0 001.065.706 3.52 3.52 0 001.335.252zm.25-1.434c-.587 0-1.066-.194-1.436-.582-.37-.389-.555-.888-.555-1.5 0-.648.191-1.168.573-1.56.381-.394.856-.59 1.425-.59.564 0 1.032.205 1.405.617.372.411.558.922.558 1.533 0 .612-.19 1.111-.572 1.5a1.885 1.885 0 01-1.398.582zm11.387 1.33v-4.06c0-.997-.225-1.736-.676-2.216-.45-.48-1.074-.72-1.87-.72-.452 0-.88.09-1.283.269a2.92 2.92 0 00-1.04.779h-.02V.11h-1.59v6.887h1.59v-3.46c0-.662.162-1.177.488-1.545.326-.367.762-.551 1.308-.551.25 0 .463.032.641.096.178.065.334.17.469.314.134.145.233.341.298.59.065.247.097.55.097.91v3.653h1.588zm4.292.104c.943 0 1.678-.345 2.205-1.034h.021v.924h1.52V.11h-1.59v.828h-.027C43.2.318 42.485.006 41.583.006a3.282 3.282 0 00-2.386 1.006c-.296.313-.53.692-.7 1.138a3.967 3.967 0 00-.258 1.434c0 .523.086 1.006.257 1.447.171.441.405.814.7 1.117a3.1 3.1 0 001.065.706 3.52 3.52 0 001.336.252zm.25-1.434c-.588 0-1.066-.194-1.436-.582-.37-.389-.555-.888-.555-1.5 0-.648.19-1.168.572-1.56.381-.394.857-.59 1.425-.59.564 0 1.033.205 1.405.617.372.411.558.922.558 1.533 0 .612-.19 1.111-.572 1.5a1.885 1.885 0 01-1.398.582zm8.009 4.219c.504 0 .955-.059 1.352-.176a3 3 0 001.003-.49c.27-.208.494-.465.672-.768.178-.303.307-.634.385-.992.079-.359.118-.752.118-1.18V.11h-1.588v.724h-.028a2.968 2.968 0 00-.988-.62A3.223 3.223 0 0049.62 0a3.29 3.29 0 00-1.707.448 3.09 3.09 0 00-1.175 1.244c-.28.531-.42 1.127-.42 1.79 0 .67.147 1.265.44 1.785.294.519.698.918 1.21 1.196a3.582 3.582 0 001.735.417c.86 0 1.56-.28 2.102-.841h.028v.73c0 .487-.18.892-.542 1.214-.36.321-.869.482-1.526.482-.448 0-.842-.055-1.182-.165a7.627 7.627 0 01-1.176-.517l-.374 1.392c.388.23.825.407 1.31.53.486.125.99.187 1.513.187zm.055-4.467c-.573 0-1.046-.18-1.418-.541-.373-.36-.559-.844-.559-1.451 0-.584.183-1.06.548-1.427.366-.368.842-.551 1.43-.551.559 0 1.025.181 1.397.544.372.363.558.834.558 1.413 0 .584-.181 1.065-.544 1.444-.363.38-.834.57-1.412.57zm8.016 1.682c.648 0 1.218-.117 1.71-.351a3.334 3.334 0 001.21-.952l-1.11-.944c-.434.542-1.01.813-1.726.813-.51 0-.94-.14-1.294-.42-.354-.28-.582-.664-.683-1.151h5.05c.027-.166.041-.375.041-.628 0-.666-.136-1.261-.41-1.785A3.01 3.01 0 0059.538.455C59.023.156 58.43.007 57.76.007c-.476 0-.923.086-1.339.258a3.187 3.187 0 00-1.075.72c-.3.309-.536.683-.708 1.124a3.951 3.951 0 00-.256 1.441c0 .703.155 1.327.465 1.872.31.544.732.961 1.269 1.25.536.29 1.14.435 1.81.435zm1.603-4.28h-3.47c.111-.442.326-.783.646-1.024.319-.242.698-.362 1.137-.362.444 0 .81.124 1.1.372.289.248.484.586.586 1.013z"
          />
          <path d="M1.17 4.286c.646 0 1.17.533 1.17 1.19a1.18 1.18 0 01-1.17 1.19A1.18 1.18 0 010 5.477c0-.657.524-1.19 1.17-1.19zM1.17 0c.646 0 1.17.533 1.17 1.19a1.18 1.18 0 01-1.17 1.191A1.18 1.18 0 010 1.191 1.18 1.18 0 011.17 0zm4.212 0c.646 0 1.17.533 1.17 1.19a1.18 1.18 0 01-1.17 1.191 1.18 1.18 0 01-1.17-1.19A1.18 1.18 0 015.382 0z" />
          <ellipse cx={5.382} cy={5.524} opacity={0.5} rx={1.17} ry={1.19} />
        </g>
      </g>
    </svg>
  )
}
