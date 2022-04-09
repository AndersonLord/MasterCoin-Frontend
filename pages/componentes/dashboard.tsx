import { useEffect, useState } from "react";

export const isBrowser = typeof window !== "undefined";

export default function Dashboard(data: any) {
    
    const [coinsMarket, setCoinsMarket] = useState([]);

    function ConverterGrana(valor: any){
        var formato = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          });
        return formato.format(valor);
    }

    function VariacaoPorcentagem(open: any, close: any){
        var porcentagem = ((close - open) / open) * 100;
        return parseFloat(porcentagem.toFixed(2));
    }

    useEffect(() => {
        if(isBrowser){
            const ws = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");
            ws.onmessage = (event: any) => {
                //console.log(eval(event.data));
                setCoinsMarket(eval(event.data));
            };
        }
      }, []);

  return (
      <>
    <div className="w-full bg-gradient-to-br from-yellow-500 to-pink-600 pt-12 pb-12 px-4 text-white absolute h-36"></div>
    <div className="w-full bg-gray-50 absolute" style={{top: "16vh", height: "75vh", zIndex: "-1"}}></div>
    <div className="container m-auto" style={{minHeight: "82vh"}}>
        <div className="w-full text-gray-800 overflow-hidden border-white relative">
            <div className="w-full pt-12 pb-12 px-4 text-white">
                <h1 className="text-3xl font-light mb-3">Market Overview (24h)</h1>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 bg-gray-50 px-2">
                    <ul className="relative -top-10">
                        <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-yellow-500">
                            <div className="flex items-center text-center">
                                <div className="w-16 text-3xl leading-none">
                                    <i className={`cc BTC`}></i>
                                </div>
                                <div className="w-1/4"><span className="hidden md:block ml-3 text-gray-400">Symbol</span><span className="md:hidden ml-3 text-gray-400">SYB.</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-400"><span className="hidden md:block">Open Price</span><span className="md:hidden">OP.P.</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-400"><span className="hidden md:block">Close Price</span><span className="md:hidden">CL.P</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-400"><span className="hidden md:block">Change %</span><span className="md:hidden">CH.%</span></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="relative -top-10">
                        {coinsMarket.map((coin: any, index: number) =>
                        index < 8 &&
                        <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-yellow-500">
                            <div className="flex items-center text-center">
                                <div className="w-16 text-3xl leading-none">
                                    <i className={`cc BTC ${coin.s.substring(0,3)}`}></i>
                                </div>
                                <div className="w-1/4"><span className="hidden md:block ml-3 text-gray-500">{coin.s}</span><span className="md:hidden ml-3 text-gray-500">{coin.s.substring(0,3)}</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-500"><span className="hidden md:block">{ConverterGrana(coin.o)}</span><span className="md:hidden">---</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-500"><span className="hidden md:block">{ConverterGrana(coin.c)}</span><span className="md:hidden">---</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className={VariacaoPorcentagem(coin.o,coin.c) >= 0 ? "w-1/4 text-green-500": "w-1/4 text-red-500"}><span>{VariacaoPorcentagem(coin.o,coin.c)}%</span></div>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
                <div className="w-full md:w-1/2 bg-gray-50 px-2">
                    <ul className="relative -top-10">
                        <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-yellow-500">
                            <div className="flex items-center text-center">
                                <div className="w-16 text-3xl leading-none">
                                    <i className={`cc BTC`}></i>
                                </div>
                                <div className="w-1/4"><span className="hidden md:block ml-3 text-gray-400">Symbol</span><span className="md:hidden ml-3 text-gray-400">SYB.</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-400"><span className="hidden md:block">Open Price</span><span className="md:hidden">OP.P.</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-400"><span className="hidden md:block">Close Price</span><span className="md:hidden">CL.P</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-400"><span className="hidden md:block">Change %</span><span className="md:hidden">CH.%</span></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="relative -top-10">
                        {coinsMarket.map((coin: any, index: number) =>
                        index > 8 && index < 17 &&
                        <li className="mb-2 bg-white p-3 shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-yellow-500">
                            <div className="flex items-center text-center">
                                <div className="w-16 text-3xl leading-none">
                                    <i className={`cc BTC ${coin.s.substring(0,3)}`}></i>
                                </div>
                                <div className="w-1/4"><span className="hidden md:block ml-3 text-gray-500">{coin.s}</span><span className="md:hidden ml-3 text-gray-500">{coin.s.substring(0,3)}</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-500"><span className="hidden md:block">{ConverterGrana(coin.o)}</span><span className="md:hidden">---</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className="w-1/4 text-gray-500"><span className="hidden md:block">{ConverterGrana(coin.c)}</span><span className="md:hidden">---</span></div>
                                <div className="text-gray-300">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    className="w-4 h-4 current-fill"
                                    viewBox="0 0 24 24"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                    </svg>
                                </div>
                                <div className={VariacaoPorcentagem(coin.o,coin.c) >= 0 ? "w-1/4 text-green-500": "w-1/4 text-red-500"}><span>{VariacaoPorcentagem(coin.o,coin.c)}%</span></div>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
