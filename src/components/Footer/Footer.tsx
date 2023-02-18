import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center bg-black">
      <div className="max-w-[71.25rem] w-full px-8">
        <div className="flex pt-10  pb-[4.625rem] border-b border-[#333]">
          <div className="w-1/6">
            <ul>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/products"}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/introduce"}
                >
                  Introduce
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/6">
            <ul>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/"}
                >
                  Shopping guide
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/products"}
                >
                  RETURN POLICY
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3"
                  to={"/introduce"}
                >
                  FREQUENTLY ASKED QUESTIONS
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/6">
            <p className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3">
              payment methods
            </p>
            <div className=" flex pt-2">
              <div className="w-[3rem] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="54px"
                  height="33px"
                  viewBox="0 0 54 33"
                  version="1.1"
                >
                  <title>visa</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <rect
                      id="path-1"
                      x="0"
                      y="0"
                      width="54"
                      height="33"
                      rx="4"
                    />
                  </defs>
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Footer"
                      transform="translate(-434.000000, -113.000000)"
                    >
                      <g id="Group-9">
                        <g transform="translate(434.000000, 70.000000)">
                          <g id="Group-4">
                            <g
                              id="Group-10"
                              transform="translate(0.000000, 43.000000)"
                            >
                              <g id="visa">
                                <g id="Rectangle-14-Copy-2">
                                  <g id="path-1-Clipped">
                                    <mask id="mask-2" fill="white">
                                      <use xlinkHref="#path-1" />
                                    </mask>
                                    <g id="path-1" />
                                    <rect
                                      id="path-1"
                                      stroke="#E4E4E4"
                                      strokeWidth="2"
                                      fill="#F3F3F3"
                                      fillRule="nonzero"
                                      mask="url(#mask-2)"
                                      x="0"
                                      y="0"
                                      width="54"
                                      height="33"
                                      rx="4"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="Visa_2014_logo_detail"
                                  transform="translate(7.000000, 10.000000)"
                                  fillRule="nonzero"
                                >
                                  <g id="#243881ff">
                                    <path
                                      d="M24.2231811,0.208695652 C25.2116407,-0.0163975155 26.2458605,-0.0534782609 27.2537883,0.0691304348 C27.9038635,0.149440994 28.5416959,0.305776398 29.1572504,0.515031056 C28.967988,1.33434783 28.7795283,2.1536646 28.5890617,2.9726087 C27.8125439,2.64167702 26.9655795,2.44956522 26.1109885,2.42608696 C25.6814852,2.41695652 25.2419468,2.44173913 24.8359257,2.58223602 C24.5912694,2.6673913 24.3572504,2.80006211 24.1994982,2.99720497 C24.0670346,3.16080745 23.9997993,3.37658385 24.0507777,3.5789441 C24.0955344,3.76136646 24.2257903,3.91397516 24.3723031,4.03770186 C24.6330156,4.25329193 24.940291,4.41204969 25.2447566,4.56763975 C25.9287506,4.9084472 26.6360261,5.2226087 27.2491721,5.67055901 C27.7728048,6.04583851 28.218565,6.54186335 28.418866,7.13496894 C28.5824385,7.60378882 28.5898645,8.10801242 28.5137983,8.59229814 C28.4228801,9.16975155 28.1768189,9.72670807 27.79428,10.1904969 C27.3449072,10.7418634 26.721726,11.1551553 26.0453588,11.4346584 C25.263422,11.7590683 24.4110386,11.9154037 23.5596588,11.9675776 C22.5996989,12.0225466 21.633718,11.939441 20.6928249,11.758882 C20.2328149,11.6649689 19.7744104,11.5509317 19.3443051,11.3698137 C19.5395886,10.5236646 19.7338685,9.67751553 19.9287506,8.83136646 C20.3243352,9.0031677 20.7227296,9.17273292 21.1403914,9.29329193 C21.6190667,9.43434783 22.1168088,9.51745342 22.6177622,9.54801242 C23.0759659,9.57279503 23.5427998,9.58062112 23.9915705,9.4773913 C24.3452082,9.39726708 24.70286,9.25900621 24.9471149,8.99906832 C25.1829403,8.75254658 25.2491721,8.37614907 25.0998495,8.07559006 C24.9788259,7.84062112 24.7566483,7.66937888 24.5318615,7.52236025 C24.1912694,7.30397516 23.8199699,7.13198758 23.4498746,6.96186335 C22.7173106,6.62459627 21.9969895,6.22565217 21.4462619,5.65509317 C21.0380331,5.23509317 20.7498244,4.70385093 20.6920221,4.13645963 C20.6332163,3.53403727 20.7530356,2.9163354 21.0386352,2.37223602 C21.252584,1.96173913 21.560863,1.5963354 21.9261415,1.29223602 C22.5728048,0.751677019 23.3844456,0.404720497 24.2231811,0.208695652 Z"
                                      id="Shape"
                                      fill="#243881"
                                    />
                                    <path
                                      d="M0.0768690416,0.212608696 C1.89101856,0.211304348 3.70496739,0.212236025 5.51891621,0.211863354 C5.67506272,0.211118012 5.83201204,0.224161491 5.98253889,0.264223602 C6.30326141,0.344906832 6.59066734,0.531801242 6.7835424,0.783167702 C6.92804817,0.969130435 7.02197692,1.18677019 7.06713497,1.41167702 C7.3635725,2.87385093 7.65980933,4.33602484 7.95624686,5.79819876 C8.11319619,6.56496894 8.26392373,7.33304348 8.42528851,8.09906832 C9.54721525,5.47099379 10.667135,2.84198758 11.7856498,0.212608696 C12.9168088,0.210372671 14.0479679,0.211677019 15.1791269,0.211863354 C13.4340191,4.07645963 11.689714,7.94161491 9.94380331,11.8060248 C8.80722529,11.8060248 7.67064727,11.8034161 6.53406924,11.8073292 C5.68268941,8.76689441 4.83953838,5.72459627 3.9915705,2.68360248 C3.91530356,2.42236025 3.85589563,2.14826087 3.69091821,1.92 C3.51991972,1.68465839 3.23793276,1.55403727 2.97200201,1.43142857 C2.3183141,1.14242236 1.62589062,0.937267081 0.929252383,0.758757764 C0.621776217,0.681987578 0.312493728,0.611552795 0.00140491721,0.548012422 C0.0254892122,0.436024845 0.0531861515,0.324782609 0.0768690416,0.212608696 Z"
                                      id="Shape"
                                      fill="#192164"
                                    />
                                    <path
                                      d="M16.4046162,0.912484472 C16.4596086,0.678447205 16.5105871,0.443478261 16.5681887,0.21 C17.6439538,0.213354037 18.7199197,0.209813665 19.7956849,0.211677019 C18.9047667,4.07608696 18.0144506,7.94086957 17.1241345,11.8054658 C16.0473658,11.8063975 14.9705971,11.8054658 13.8938284,11.8058953 C14.7313598,8.1747205 15.5676869,4.54360248 16.4046162,0.912484472 Z"
                                      id="Shape"
                                      fill="#28327B"
                                    />
                                    <path
                                      d="M33.2439538,1.05130435 C33.4587055,0.564782609 33.9941796,0.219689441 34.5619669,0.212608696 C35.498846,0.207950311 36.435725,0.211304348 37.3724034,0.210745342 C38.2424486,4.07590062 39.1112895,7.94124224 39.9805319,11.8065839 C38.9844456,11.8073292 37.9883593,11.8063975 36.9924737,11.8067702 C36.86001,11.2300621 36.7311591,10.6524224 36.6001004,10.0753416 C35.2194681,10.0745963 33.8390366,10.075528 32.4586051,10.0745963 C32.2330156,10.651118 32.0070246,11.2276398 31.7844456,11.8050932 C30.6538886,11.8078882 29.523131,11.8063975 28.392574,11.8056522 C30.009433,8.22074534 31.6258906,4.63565217 33.2439538,1.05130435 Z M33.3878575,7.69583851 C34.2803813,7.69658385 35.1731059,7.69602484 36.0656297,7.69602484 C35.7394882,6.24689441 35.4143502,4.79776398 35.0882087,3.34863354 C34.5184145,4.79664596 33.9546412,6.24689441 33.3878575,7.69583851 Z"
                                      id="Shape"
                                      fill="#344490"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-1"></div>
              <div className="w-[3rem] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="54px"
                  height="33px"
                  viewBox="0 0 54 33"
                  version="1.1"
                >
                  <title>mastercard</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <rect
                      id="path-1"
                      x="0"
                      y="0"
                      width="54"
                      height="33"
                      rx="4"
                    />
                  </defs>
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Footer"
                      transform="translate(-498.000000, -113.000000)"
                    >
                      <g id="Group-9">
                        <g transform="translate(434.000000, 70.000000)">
                          <g id="Group-4">
                            <g
                              id="Group-10"
                              transform="translate(0.000000, 43.000000)"
                            >
                              <g
                                id="mastercard"
                                transform="translate(64.000000, 0.000000)"
                              >
                                <g id="Rectangle-14-Copy-3">
                                  <g id="path-1-Clipped">
                                    <mask id="mask-2" fill="white">
                                      <use xlinkHref="#path-1" />
                                    </mask>
                                    <g id="path-1" />
                                    <rect
                                      id="path-1"
                                      stroke="#E4E4E4"
                                      strokeWidth="2"
                                      fill="#F2F2F2"
                                      fillRule="nonzero"
                                      mask="url(#mask-2)"
                                      x="0"
                                      y="0"
                                      width="54"
                                      height="33"
                                      rx="4"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="Mastercard-logo"
                                  transform="translate(10.000000, 6.000000)"
                                  fillRule="nonzero"
                                >
                                  <g id="g3125">
                                    <g id="g3115">
                                      <g id="g3110">
                                        <path
                                          d="M33.0671799,10.2441771 C33.0671799,15.9006543 28.4903669,20.4861359 22.8445809,20.4861359 C17.1987949,20.4861359 12.6219805,15.9006543 12.6219805,10.2441771 C12.6219805,4.58769894 17.1987949,0.00221768855 22.8445809,0.00221768855 C28.4903669,0.00221768855 33.0671799,4.58769894 33.0671799,10.2441771 Z"
                                          id="path2997"
                                          fill="#F79F1A"
                                        />
                                        <path
                                          d="M20.4560523,10.2441771 C20.4560523,15.9006543 15.8792393,20.4861359 10.2334533,20.4861359 C4.5876673,20.4861359 0.010852934,15.9006543 0.010852934,10.2441771 C0.010852934,4.58769894 4.5876673,0.00221768855 10.2334533,0.00221768855 C15.8792393,0.00221768855 20.4560523,4.58769894 20.4560523,10.2441771 Z"
                                          id="path2995"
                                          fill="#EA001B"
                                        />
                                        <path
                                          d="M16.5390378,2.18163185 C14.1538467,4.05660146 12.6227751,6.97019073 12.6227751,10.2432174 C12.6227751,13.5162441 14.1538467,16.4320571 16.5390378,18.3070269 C18.9242288,16.4320571 20.4553005,13.5162441 20.4553005,10.2432174 C20.4553005,6.97019073 18.9242288,4.05660146 16.5390378,2.18163185 Z"
                                          id="path2999"
                                          fill="#FF5F01"
                                        />
                                      </g>
                                      <g
                                        id="g3043"
                                        transform="translate(32.204037, 15.285020)"
                                        fill="#F79F1A"
                                      >
                                        <g id="text3045">
                                          <path
                                            d="M0.84401481,0.53097382 L0.84401481,0.03097382 L0.748571895,0.03097382 L0.638781349,0.37483047 L0.528990802,0.03097382 L0.433547888,0.03097382 L0.433547888,0.53097382 L0.500919357,0.53097382 L0.500919357,0.153840711 L0.603847996,0.478926037 L0.67371471,0.478926037 L0.776643341,0.152987471 L0.776643341,0.53097382 L0.84401481,0.53097382 Z M0.239543005,0.53097382 L0.239543005,0.116298049 L0.361809747,0.116298049 L0.361809747,0.0318270609 L0.0505286028,0.0318270609 L0.0505286028,0.116298049 L0.172795344,0.116298049 L0.172795344,0.53097382 L0.239543005,0.53097382 Z"
                                            id="path3057"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-1/6">
            <p className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3">
              Connect with us
            </p>
            <div className=" flex pt-2">
              <Link to={"/h"}>
                <div className="w-[3rem] flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="33px"
                    height="33px"
                    viewBox="0 0 33 33"
                    version="1.1"
                  >
                    <title>facebook</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Footer"
                        transform="translate(-723.000000, -113.000000)"
                      >
                        <g id="Group-9">
                          <g transform="translate(434.000000, 70.000000)">
                            <g
                              id="Group-3"
                              transform="translate(289.000000, 0.000000)"
                            >
                              <g
                                id="Group"
                                transform="translate(0.000000, 43.000000)"
                              >
                                <g id="facebook">
                                  <path
                                    d="M3.92259226,0 C1.75607561,0 0,1.75247525 0,3.91359136 L0,29.0864086 C0,31.2484248 1.75607561,33 3.92259226,33 L29.0774077,33 C31.2439244,33 33,31.2484248 33,29.0864086 L33,3.91359136 C33,1.75247525 31.2439244,0 29.0774077,0 L3.92259226,0 Z"
                                    id="youtube"
                                    fill="#4267B2"
                                  />
                                  <rect
                                    id="Rectangle"
                                    fill="#FFFFFF"
                                    x="12.1"
                                    y="2.2"
                                    width="16.5"
                                    height="30.8"
                                  />
                                  <path
                                    d="M29.0774077,33 L22.7694696,33 L22.7694696,20.220152 L27.0590831,20.220152 L27.701806,15.2401732 L22.7694696,15.2401732 L22.7694696,12.0607175 C22.7694696,10.6188608 23.1703849,9.63544987 25.2378851,9.63544987 L27.8752962,9.63455095 L27.8752962,5.18043638 C27.4186484,5.11931029 25.8536406,4.98357441 24.0324426,4.98357441 C20.23004,4.98357441 17.6267876,7.30456811 17.6267876,11.5672142 L17.6267876,15.2401732 L13.3263872,15.2401732 L13.3263872,20.220152 L17.6267876,20.220152 L17.6267876,33 L6.54951172,33 C5.54362792,33 4.72831371,25.155127 4.72831371,24.1492432 L0,6.32312012 C0,5.31723632 5.54362792,2.2 6.54951172,2.2 L27.0590831,0 C28.0649669,0 33,4.7744873 33,5.78037109 L33,25.7119629 C33,26.7178467 30.0832915,33 29.0774077,33 Z"
                                    id="Facebook"
                                    fill="#4267B2"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </Link>
              <div className="w-[3rem] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="33px"
                  height="33px"
                  viewBox="0 0 33 33"
                  version="1.1"
                >
                  <title>Logo</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient
                      x1="66.8139539%"
                      y1="-10.5072748%"
                      x2="98.3430837%"
                      y2="111.45127%"
                      id="linearGradient-1"
                    >
                      <stop stopColor="#4E60D3" offset="0%" />
                      <stop stopColor="#913BAF" offset="14.2763214%" />
                      <stop stopColor="#D52D88" offset="76.145798%" />
                      <stop stopColor="#F26D4F" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="30.2743283%"
                      cy="100%"
                      fx="30.2743283%"
                      fy="100%"
                      r="93.3946263%"
                      gradientTransform="translate(0.302743,1.000000),rotate(32.160094),scale(1.000000,0.719668),translate(-0.302743,-1.000000)"
                      id="radialGradient-2"
                    >
                      <stop stopColor="#FED276" offset="0%" />
                      <stop
                        stopColor="#FDBD61"
                        stopOpacity="0.975005661"
                        offset="17.0240041%"
                      />
                      <stop stopColor="#F6804D" offset="45.4081253%" />
                      <stop stopColor="#E83D5C" stopOpacity="0" offset="100%" />
                    </radialGradient>
                    <circle
                      id="path-3"
                      cx="18.7236328"
                      cy="5.671875"
                      r="1.546875"
                    />
                    <filter
                      x="-404.0%"
                      y="-371.7%"
                      width="908.1%"
                      height="908.1%"
                      filterUnits="objectBoundingBox"
                      id="filter-4"
                    >
                      <feOffset
                        dx="0"
                        dy="1"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />
                      <feGaussianBlur
                        stdDeviation="4"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.136011096 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                      />
                    </filter>
                  </defs>
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Footer"
                      transform="translate(-776.000000, -113.000000)"
                    >
                      <g id="Group-9">
                        <g transform="translate(434.000000, 70.000000)">
                          <g
                            id="Group-3"
                            transform="translate(289.000000, 0.000000)"
                          >
                            <g
                              id="Group"
                              transform="translate(0.000000, 43.000000)"
                            >
                              <g
                                id="insta"
                                transform="translate(53.000000, 0.000000)"
                              >
                                <g id="Logo">
                                  <g id="bg">
                                    <path
                                      d="M3.92259226,0 C1.75607561,0 0,1.75247525 0,3.91359136 L0,29.0864086 C0,31.2484248 1.75607561,33 3.92259226,33 L29.0774077,33 C31.2439244,33 33,31.2484248 33,29.0864086 L33,3.91359136 C33,1.75247525 31.2439244,0 29.0774077,0 L3.92259226,0 Z"
                                      id="youtube"
                                      fill="url(#linearGradient-1)"
                                    />
                                    <path
                                      d="M3.92259226,0 C1.75607561,0 0,1.75247525 0,3.91359136 L0,29.0864086 C0,31.2484248 1.75607561,33 3.92259226,33 L29.0774077,33 C31.2439244,33 33,31.2484248 33,29.0864086 L33,3.91359136 C33,1.75247525 31.2439244,0 29.0774077,0 L3.92259226,0 Z"
                                      id="youtube"
                                      fill="url(#radialGradient-2)"
                                    />
                                  </g>
                                  <g
                                    id="Icon"
                                    transform="translate(4.318359, 4.447266)"
                                  >
                                    <path
                                      d="M17.4021416,0.0322265625 L7.02559273,0.0322265625 C3.16292795,0.0322265625 0.0322265625,3.16312862 0.0322265625,7.02563194 L0.0322265625,17.2731962 C0.0322265625,21.1352 3.16342095,24.2666016 7.02559273,24.2666016 L17.4021416,24.2666016 C21.2648064,24.2666016 24.3955078,21.1356995 24.3955078,17.2731962 L24.3955078,7.02563194 C24.3955078,3.16362812 21.2643134,0.0322265625 17.4021416,0.0322265625 Z M7.02559273,2.28808594 L17.4021416,2.28808594 C20.0184033,2.28808594 22.1396484,4.40947144 22.1396484,7.02563194 L22.1396484,17.2731962 C22.1396484,19.8898551 20.0188973,22.0107422 17.4021416,22.0107422 L7.02559273,22.0107422 C4.4093311,22.0107422 2.28808594,19.8893567 2.28808594,17.2731962 L2.28808594,7.02563194 C2.28808594,4.40897298 4.40883705,2.28808594 7.02559273,2.28808594 Z"
                                      id="Camera-Frame"
                                      fill="#FFFFFF"
                                      fillRule="nonzero"
                                    />
                                    <path
                                      d="M12.2460938,5.83300781 C8.70424419,5.83300781 5.83300781,8.70424419 5.83300781,12.2460938 C5.83300781,15.7879433 8.70424419,18.6591797 12.2460938,18.6591797 C15.7879433,18.6591797 18.6591797,15.7879433 18.6591797,12.2460938 C18.6591797,8.70424419 15.7879433,5.83300781 12.2460938,5.83300781 Z M12.2460938,8.08886719 C14.5420666,8.08886719 16.4033203,9.95012092 16.4033203,12.2460938 C16.4033203,14.5420666 14.5420666,16.4033203 12.2460938,16.4033203 C9.95012092,16.4033203 8.08886719,14.5420666 8.08886719,12.2460938 C8.08886719,9.95012092 9.95012092,8.08886719 12.2460938,8.08886719 Z"
                                      id="Oval-1"
                                      fill="#FFFFFF"
                                      fillRule="nonzero"
                                    />
                                    <g id="Oval-2">
                                      <use
                                        fill="black"
                                        fillOpacity="1"
                                        filter="url(#filter-4)"
                                        xlinkHref="#path-3"
                                      />
                                      <use
                                        fill="#FFFFFF"
                                        fillRule="evenodd"
                                        xlinkHref="#path-3"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-2/6 flex flex-col">
            <p className="text-white hover:underline uppercase inline-block text-[0.6rem] font-medium tracking-[0.125rem] mt-3">
              GET NEWSLETTER
            </p>
            <div className="pt-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Submit");
                }}
              >
                <input
                  className="w-full outline-[0] px-2 py-2 text-[0.75rem] text-white bg-black border border-white"
                  placeholder="Please enter your email and press enter"
                  type="text"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="py-7">
          <div className="">
            <p className="text-secondary text-[0.7rem]">
              Copyright © 2023 Dev Vo Design.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
