import * as React from "react"

export default function IconPhotoSnap(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={88}
      height={88}
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__c"
          x1="0%"
          x2="50%"
          y1="78.125%"
          y2="21.875%"
        >
          <stop offset="0%" stopColor="#FFC593" />
          <stop offset="51.945%" stopColor="#BC7198" />
          <stop offset="100%" stopColor="#5A77FF" />
        </linearGradient>
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
        <use fill="#000" xlinkHref="#prefix__a" />
        <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M24.533 46.838v-1.703h1.008c.312 0 .597-.05.855-.15.258-.1.479-.24.662-.417a1.91 1.91 0 00.427-.629c.102-.24.154-.504.154-.79a2.01 2.01 0 00-.154-.787 1.902 1.902 0 00-.427-.632 1.935 1.935 0 00-.662-.418c-.258-.1-.543-.15-.855-.15H23v5.676h1.533zm.927-3.081h-.927V42.54h.927a.63.63 0 01.46.182.579.579 0 010 .851.63.63 0 01-.46.183zm4.68 3.08V44.65h2.056v2.189h1.533v-5.676h-1.533v2.108H30.14v-2.108h-1.532v5.676h1.532zm7.703.163a3.2 3.2 0 002.239-.892c.282-.276.504-.594.665-.957.162-.362.242-.746.242-1.151s-.08-.79-.242-1.151a3.072 3.072 0 00-1.665-1.61A3.2 3.2 0 0037.843 41a3.182 3.182 0 00-2.238.892 3.072 3.072 0 00-.666.957A2.798 2.798 0 0034.697 44c0 .405.08.79.242 1.151.161.363.383.681.666.957a3.182 3.182 0 002.238.892zm0-1.378c-.22 0-.427-.04-.62-.122a1.47 1.47 0 01-.501-.34 1.624 1.624 0 01-.33-.515A1.687 1.687 0 0136.27 44c0-.232.04-.447.121-.645.08-.197.191-.369.33-.514.14-.146.307-.26.501-.341.194-.081.4-.122.621-.122a1.548 1.548 0 011.452.977c.081.198.121.413.121.645 0 .232-.04.447-.12.645a1.59 1.59 0 01-.335.514 1.538 1.538 0 01-1.118.463zm6.736 1.216V42.54h1.573v-1.379h-4.679v1.379h1.573v4.297h1.533zm5.203.162a3.2 3.2 0 002.239-.892c.282-.276.504-.594.665-.957.162-.362.242-.746.242-1.151s-.08-.79-.242-1.151a3.072 3.072 0 00-1.665-1.61A3.2 3.2 0 0049.782 41a3.182 3.182 0 00-2.238.892 3.072 3.072 0 00-.666.957A2.798 2.798 0 0046.636 44c0 .405.08.79.242 1.151.162.363.383.681.666.957a3.182 3.182 0 002.238.892zm0-1.378c-.22 0-.427-.04-.62-.122a1.47 1.47 0 01-.501-.34 1.624 1.624 0 01-.33-.515 1.687 1.687 0 01-.122-.645c0-.232.04-.447.121-.645.081-.197.191-.369.331-.514.14-.146.307-.26.5-.341.194-.081.4-.122.621-.122a1.544 1.544 0 011.452.977c.081.198.121.413.121.645 0 .232-.04.447-.12.645a1.59 1.59 0 01-.335.514 1.538 1.538 0 01-1.118.463zM55.672 47c.354 0 .671-.05.951-.15.28-.1.516-.235.71-.405a1.71 1.71 0 00.597-1.31c0-.33-.065-.6-.194-.81a1.613 1.613 0 00-.484-.511 2.599 2.599 0 00-.633-.309l-.633-.21a2.803 2.803 0 01-.484-.207c-.13-.073-.194-.174-.194-.304 0-.125.055-.237.166-.337a.63.63 0 01.44-.15c.14 0 .265.023.378.07.113.045.21.098.29.157.098.065.184.138.259.22l.887-.933a2.077 2.077 0 00-.476-.406 2.852 2.852 0 00-.613-.28 2.778 2.778 0 00-.887-.125c-.323 0-.616.049-.88.146a2.135 2.135 0 00-.673.39c-.186.161-.33.348-.432.559a1.47 1.47 0 00-.153.648c0 .33.065.6.194.811.129.21.29.381.484.51.193.13.404.233.633.309l.633.21c.194.066.355.135.484.208.13.073.194.174.194.304a.568.568 0 01-.194.425c-.129.122-.306.183-.532.183-.183 0-.348-.031-.496-.094a2.036 2.036 0 01-.383-.206 2 2 0 01-.331-.308l-.888.932c.162.184.353.346.573.487.188.124.422.236.702.336.28.1.608.15.984.15zm4.678-.162v-3.162l2.428 3.162h1.323v-5.676h-1.533v3.162l-2.42-3.162h-1.33v5.676h1.532zm6.05 0l.404-1.216h1.855l.403 1.216h1.654l-2.138-5.676h-1.694l-2.137 5.676H66.4zm1.856-2.433h-1.049l.524-1.662.525 1.662zm4.638 2.433v-1.703h1.009c.312 0 .597-.05.855-.15.258-.1.478-.24.661-.417.183-.179.326-.388.428-.629.102-.24.153-.504.153-.79a2.01 2.01 0 00-.153-.787 1.902 1.902 0 00-.428-.632 1.935 1.935 0 00-.661-.418c-.258-.1-.543-.15-.855-.15H71.36v5.676h1.533zm.928-3.081h-.928V42.54h.928a.63.63 0 01.46.182.579.579 0 010 .851.63.63 0 01-.46.183z"
        />
        <path
          fill="url(#prefix__c)"
          d="M0 6l4-6 4 6z"
          transform="translate(12 41)"
        />
      </g>
    </svg>
  )
}
