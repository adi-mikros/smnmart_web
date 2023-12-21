(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_8__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





var data = __webpack_require__(6311);
// Import Swiper React components

// Import Swiper styles



// import required modules

function Home({ promo , rekomendasi , kategori  }) {
    let displayPromo;
    let displayRekomendasi;
    let displayKategori;
    let displayBanner;
    const slides = [
        "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/1.jpg",
        "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/2.jpg",
        "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/3.jpg",
        "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/4.jpg",
        "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/5.jpg"
    ];
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onChange = (event)=>{
        setValue(event.target.value);
    };
    const onSearch = (searchTerm)=>{
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };
    const onSearchDummy = (searchTerm)=>{
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };
    displayPromo = promo.map(function(promo) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/detailproduk/" + promo.KodeProduk,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "overflow-hidden bg-white hover:scale-105 transition-all cursor-pointer shadow-md ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/" + promo.KodeProduk + ".jpg",
                        alt: "Gambar",
                        className: "object-cover w-full aspect-square"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center w-full ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "block font-light text-slate-800",
                                children: [
                                    " ",
                                    promo.Nama
                                ]
                            }, promo.id),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "block font-regular text-slate-800",
                                children: [
                                    " Rp ",
                                    promo.Harga
                                ]
                            }, promo.id),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "block font-light line-through decoration-1 text-red-500",
                                children: [
                                    " Rp ",
                                    promo.HargaUp
                                ]
                            }, promo.id)
                        ]
                    })
                ]
            })
        }, promo.id);
    });
    //  displayRekomendasi = rekomendasi.map(function(rekomendasi) {
    //   return (
    //     <div className='group relative h-72 w-48 rounded-3xl overflow-hidden shadow-md'>
    //       <div className='flex bg-cover h-full w-full group-hover:scale-105 transition-all cursor-pointer'>
    //           <img key={rekomendasi.id} src={rekomendasi.gambar} className="relative object-cover  bg-white"></img>
    //           <div className='p-5 bottom-0 w-full bg-black/50 absolute'>
    //             <span className='block truncate text-md font-semibold' key={rekomendasi.id} >{rekomendasi.Nama}</span>
    //             <span className='block text-md' key={rekomendasi.id} >Rp {rekomendasi.Harga}</span>
    //           </div>
    //       </div>
    //     </div>
    //   )
    //  })
    displayRekomendasi = rekomendasi.map(function(rekomendasi) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/detailproduk/" + rekomendasi.KodeProduk,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-2xl overflow-hidden group shadow-md cursor-pointer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " bg-black/50 group-hover:scale-105 group-hover:bg-black/60 transition-all group-hover:pb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/" + rekomendasi.KodeProduk + ".jpg",
                            className: "object-cover w-full aspect-square",
                            alt: rekomendasi.Nama
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center py-2 font-thin leading-none group-hover:py-1 transition-all",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white block",
                                    children: rekomendasi.Nama
                                }, rekomendasi.id),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-white block",
                                    children: [
                                        "Rp ",
                                        rekomendasi.Harga
                                    ]
                                }, rekomendasi.id)
                            ]
                        })
                    ]
                })
            })
        }, rekomendasi.id);
    });
    displayKategori = kategori.map(function(kategori) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/kategori/" + kategori.kategori_id,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center hover:scale-110 transition-all cursor-pointer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border-2 border-slate-300 shadow-md aspect-square rounded-xl overflow-hidden mb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://api-smnmart.biznizo.my.id/olshop-panel/banner/kategori/" + kategori.kategori_id + ".png",
                            alt: "",
                            className: "h-full scale-90 object-contain"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-slate-800 font-medium text-sm",
                        children: kategori.nama
                    })
                ]
            })
        }, kategori.kategori_id);
    });
    const x = [
        1,
        2,
        3,
        4
    ];
    displayBanner = x.map((x)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-contain w-full h-96 backdrop backdrop-blur-md absolute ",
                    src: "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/" + x + ".jpg",
                    alt: "image slide" + x
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-cover w-full h-96",
                    src: "https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/" + x + ".jpg",
                    alt: "image slide" + x
                })
            ]
        }, x));
    let displayBanner2;
    displayBanner2 = x.map((x)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
            className: "",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-contain w-full h-full absolute bg-black/50 z-10",
                    // style={{ backgroundImage:`url(${"/banner-"+x+".jpg"})` }}
                    src: "/banner-" + x + ".jpg",
                    alt: "image slide" + x
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "object-cover w-full blur-sm ",
                    src: "/banner-" + x + ".jpg",
                    alt: "image slide" + x
                })
            ]
        }, x);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "SMN Mart"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/icon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "min-w-[375px] bg-white",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container px-2 mx-auto p-2 mt-2 2xl:px-40 xl:mt-2 md:mt-5 lg:px-10 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "my-2 bg-white w-full rounded-md flex mx-0 md:mx-0 relative overflow-hidden shadow-md border border-slate-400 p-1 mt-0 z-[6] h-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                "stroke-width": "1",
                                                className: "my-auto w-6 h-6 stroke-slate-500 mx-2 ",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "search-inner text-black w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Cari produk...",
                                                        value: value,
                                                        onChange: onChange,
                                                        className: " bg-transparent outline-none border-collapse font-thin w-full"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/search/" + value,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>onSearch(value),
                                                            className: "absolute right-0 font-thin h-full top-0 px-2 bg-slate-200 hover:bg-slate-300 ",
                                                            children: " Search "
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-black p-5 z-[5] dropdown font-thin w-full absolute",
                                            children: data.filter((item)=>{
                                                const searchTerm = value.toLowerCase();
                                                const fullName = item.Nama.toLowerCase();
                                                return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                                            }).slice(0, 10).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        onSearch(item.Nama);
                                                    },
                                                    className: "dropdown-row ",
                                                    children: item.Nama
                                                }, item.Nama))
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                                    spaceBetween: 30,
                                    autoplay: {
                                        delay: 3000,
                                        disableOnInteraction: false
                                    },
                                    pagination: {
                                        clickable: true
                                    },
                                    navigation: false,
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Autoplay,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation
                                    ],
                                    className: "mySwiper bg-transparent rounded-2xl h-56 sm:h-96",
                                    style: {
                                        "--swiper-navigation-color": "gray",
                                        "--swiper-navigation-size": "30px",
                                        "--swiper-pagination-color": "gray"
                                    },
                                    children: displayBanner2
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "pt-10 text-slate-800 text-2xl font-bold text-center",
                                children: "Kategori Produk"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-10 xl:px-80 grid grid-cols-3 xl:gap-28 gap-2 md:gap-10",
                                children: displayKategori
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "border border-1 border-slate-200 w-1/2 mx-auto my-16"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-slate-800 text-2xl font-bold text-center",
                                        children: "Rekomendasi Produk"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-6 gap-5 mb-20 ",
                                        children: displayRekomendasi
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "border border-1 border-slate-200 w-1/2 mx-auto my-16"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-slate-800 text-2xl font-bold text-center",
                                        children: "Promo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-6 mb-20",
                                        children: displayPromo
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col w-full h-auto bg-black text-left font-extralight px-0 mt-2 mx-auto sm:gap",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-max mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10 md:w-full md:p-10 lg:grid-cols-4 footer gap-5 my-auto ml-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "KATEGORI POPULER"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Daging Sapi"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Daging Ayam"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Olahan Makanan"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "PENCARIAN POPULER"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Daging"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Wagyu"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Lemak"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "Ikuti Kami di"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Facebook"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Instagram"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "DOWNLOAD SNM MART"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Playstore"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "SMN Mart 2023"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    const promo_res = await fetch("https://api-smnmart.biznizo.my.id/android/promo");
    const rekomendasi_res = await fetch("https://api-smnmart.biznizo.my.id/android/rekomendasi");
    const kategori_res = await fetch("https://api-smnmart.biznizo.my.id/android/kategori");
    const promo = await promo_res.json();
    const rekomendasi = await rekomendasi_res.json();
    const kategori = await kategori_res.json();
    return {
        props: {
            promo,
            rekomendasi,
            kategori,
            data
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,664,311], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();