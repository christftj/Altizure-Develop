/*
      * floor distinguish method
      * @public
      * @param int floorNumber (Total floor count)
      * @param int first_floor (The first floor number. For example, if you want the floor numbers start from 10, then set first_floor = 10)
      * @param double b_bottom (The buidling bottom height)
      * @param double b_top (The buidling top height)
      * @param double volume (including color, opacity and the base polygon)
      */
function floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume) {
  let polyList = []
  let floorHeight = (b_top - b_bottom) / floorNumber
  for (let i = 0; i < floorNumber; i++) {
    let this_bottom = b_bottom + i * floorHeight
    let this_top = b_bottom + (i + 1) * floorHeight
    volume = Object.assign(volume, { top: this_top, bottom: this_bottom })
    let poly = new altizure.PolygonMarker({
      volume: volume,
      sandbox: sandbox,
      name: 'polygon' + i,
      visible: true,
      interactable: true
    })
    poly.on('click', function (e) {
      alert(companyInfo[companyID])
      document.getElementById("bg").style.display = "block";
    })
    let tooltip = new Tooltip({ content: companyInfo_window[companyID] })
    poly.on('mouseenter', function (e) {
      poly.visible = true
      tooltip.show(e)
    })
    poly.on('mouseover', function (e) {
      tooltip.move(e)
      poly.color = 0xffffff;
    })
    poly.on('mouseleave', function (e) {
      poly.color = volume.color;
      tooltip.hide()
    })
    polyList.push(poly)
  }
}

let companyID1 = 1, floorNumber1 = 1, first_floor1 = 1, b_bottom1 = 25.28, b_top1 = 48.28
let volume1 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26658544005944, 22.337249507871203],
    [114.2671403799964, 22.33760064271837],
    [114.26696209525642, 22.337832286326503],
    [114.26641439971021, 22.337465536076248],
    [114.26658544005944, 22.337249507871203]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),
}
floorDistinguish(companyID1, floorNumber1, first_floor1, b_bottom1, b_top1, volume1);//A36
// printCompanyInfo();

let companyID2 = 2, floorNumber2 = 1, first_floor2 = 1, b_bottom2 = 25.28, b_top2 = 48.28
let volume2 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26689982217296, 22.337878030794375],
    [114.26634514434245, 22.337529940937333],
    [114.26621894905846, 22.33772585419459],
    [114.26677416392052, 22.338073823749806],
    [114.26689982217296, 22.337878030794375]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID2, floorNumber2, first_floor2, b_bottom2, b_top2, volume2);//A48

let companyID3 = 3, floorNumber3 = 1, first_floor3 = 1, b_bottom3 = 25.28, b_top3 = 29.884
let volume3 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26595614469062, 22.33684354372857],
    [114.2664825324488, 22.337191351065],
    [114.26634941343734, 22.33734671643355],
    [114.26582549913817, 22.337006524180193],
    [114.26595614469062, 22.33684354372857]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID3, floorNumber3, first_floor3, b_bottom3, b_top3, volume3);//A41-1

let companyID4 = 4, floorNumber4 = 1, first_floor4 = 1, b_bottom4 = 43.676, b_top4 = 48.28
let volume4 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2649284963755, 22.3365998377321],
    [114.26545953206885, 22.33694474101652],
    [114.26534001352309, 22.33710326518596],
    [114.26480372395714, 22.33675829063154],
    [114.2649284963755, 22.3365998377321]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID4, floorNumber4, first_floor4, b_bottom4, b_top4, volume4);//A56-5

let companyID5 = 5, floorNumber5 = 1, first_floor5 = 1, b_bottom5 = 34.648, b_top5 = 39.072
let volume5 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26509984566528,22.336973087969447],
    [114.26524163425456,22.336795568064115],
    [114.26494847850543,22.336576549399847],
    [114.26480266870507,22.336755018609956],
    [114.26509984566528,22.336973087969447]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID5, floorNumber5, first_floor5, b_bottom5, b_top5, volume5);//A56-3一半

let companyID6 = 6, floorNumber6 = 1, first_floor6 = 1, b_bottom6 = 25.28, b_top6 = 29.884
let volume6 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2674735597808,22.336607992510928],[114.26761167496103,22.33642769493218],
    [114.26734677796152,22.336252762495818],[114.26722095726045,22.33642443851466],
    [114.2674735597808,22.336607992510928]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID6, floorNumber6, first_floor6, b_bottom6, b_top6, volume6); //A1-1一半1

let companyID7 = 7, floorNumber7 = 1, first_floor7 = 1, b_bottom7 = 27.28, b_top7 = 47.25
let volume7 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2647109187633, 22.33678101340464],
    [114.26462774590557, 22.3369920306746],
    [114.26395429025857, 22.336720715407115],
    [114.26402608489818, 22.336498766771758],
    [114.2647109187633, 22.33678101340464]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID7, floorNumber7, first_floor7, b_bottom7, b_top7, volume7);//A28

let companyID8 = 8, floorNumber8 = 1, first_floor8 = 1, b_bottom8 = 27.28, b_top8 = 47.25
let volume8 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26469465317096, 22.337097603284292],
    [114.26461016835435, 22.337302602367423],
    [114.26398823250899, 22.33707844158137],
    [114.26406537953702, 22.336857450135266],
    [114.26469465317096, 22.337097603284292]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID8, floorNumber8, first_floor8, b_bottom8, b_top8, volume8);//A30

// let companyID9 = 9, floorNumber9 = 1, first_floor9 = 1, b_bottom9 = 27.28, b_top9 = 32.424
// let volume9 = {
//   color: 0xCCFFFF,
//   opacity: 0.4,
//   points: [
//     [114.26598961157805, 22.33801167388928],
//     [114.26652521649365, 22.338345921941762],
//     [114.26639986694947, 22.338528148944704],
//     [114.26584755836829, 22.338157218087876],
//     [114.26598961157805, 22.33801167388928]
//   ].map(function (lnglat) {
//     return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
//   }),

// }
// floorDistinguish(companyID9, floorNumber9, first_floor9, b_bottom9, b_top9, volume9);//A79-1

let companyID10 = 10, floorNumber10 = 3, first_floor10 = 1, b_bottom10 = 37.568, b_top10 = 53
let volume10 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26598961157805, 22.33801167388928],
    [114.26652521649365, 22.338345921941762],
    [114.26639986694947, 22.338528148944704],
    [114.26584755836829, 22.338157218087876],
    [114.26598961157805, 22.33801167388928]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID10, floorNumber10, first_floor10, b_bottom10, b_top10, volume10);//A79-3,4,5

let companyID11 = 11, floorNumber11 = 1, first_floor11 = 1, b_bottom11 = 32.424, b_top11 = 37.568
let volume11 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26598961157805, 22.33801167388928],
    [114.26652521649365, 22.338345921941762],
    [114.26639986694947, 22.338528148944704],
    [114.26584755836829, 22.338157218087876],
    [114.26598961157805, 22.33801167388928]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID11, floorNumber11, first_floor11, b_bottom11, b_top11, volume11);//A79-2

let companyID12 = 12, floorNumber12 = 1, first_floor12 = 1, b_bottom12 = 38.424, b_top12 = 68.568
let volume12 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26332902604968, 22.34067930702583],
    [114.26382882827022, 22.340064240977718],
    [114.26479632560232, 22.340768587970288],
    [114.2644912074256, 22.341094643421044],
    [114.26460778728375, 22.341181973138525],
    [114.26491529987182, 22.340817098148314],
    [114.26601904944962, 22.341623857979172],
    [114.26553224286337, 22.342239281008066],
    [114.26332009265955, 22.340689170652116],
    [114.26332902604968, 22.34067930702583]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID12, floorNumber12, first_floor12, b_bottom12, b_top12, volume12);//A175,A177,A190,A191

let companyID13 = 13, floorNumber13 = 1, first_floor13 = 1, b_bottom13 = 38.424, b_top13 = 60.568
let volume13 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26408348767076,22.3399854051927],[114.26491808477425,22.34054953705893],
    [114.26504861294059,22.340375475158986],[114.26423503660777,22.339839195185863],
    [114.26415077124092,22.339906207323967],[114.26391541000532,22.339736294750345],
    [114.2640201336176,22.33960044148854],[114.26390933295485,22.339539264937542],
    [114.26372702845158,22.33976359130582],[114.26408348767076,22.3399854051927]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID13, floorNumber13, first_floor13, b_bottom13, b_top13, volume13);//A196,194

let companyID14 = 14, floorNumber14 = 1, first_floor14 = 1, b_bottom14 = 38.424, b_top14 = 60.6
let volume14 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2648532713307, 22.339816320434828],
    [114.26527458758537, 22.340097148642233],
    [114.26512562828653, 22.34028086560942],
    [114.2646998255205, 22.34001436653308],
    [114.2648532713307, 22.339816320434828]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID14, floorNumber14, first_floor14, b_bottom14, b_top14, volume14);//A203一半

let companyID15 = 15, floorNumber15 = 1, first_floor15 = 1, b_bottom15 = 34.488, b_top15 = 39.092
let volume15 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26595614469062, 22.33684354372857],
    [114.2664825324488, 22.337191351065],
    [114.26634941343734, 22.33734671643355],
    [114.26582549913817, 22.337006524180193],
    [114.26595614469062, 22.33684354372857]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID15, floorNumber15, first_floor15, b_bottom15, b_top15, volume15);//A41-3

let companyID16 = 16, floorNumber16 = 5, first_floor16 = 1, b_bottom16 = 26.28, b_top16 = 47.38
let volume16 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2657401823126, 22.337109852939406],
    [114.26626819554133, 22.337470199425177],
    [114.266133859376, 22.33763651271257],
    [114.2655995077844, 22.33729609570573],
    [114.2657401823126, 22.337109852939406]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID16, floorNumber16, first_floor16, b_bottom16, b_top16, volume16);//A45-1,2,4,5为了省事3楼也算在里面了，注意！！！！！！！！！

let companyID17 = 17, floorNumber17 = 1, first_floor17 = 1, b_bottom17 = 29.61, b_top17 = 57.65
let volume17 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26639309664095, 22.339975037952826],
    [114.26681432471261, 22.340253497647062],
    [114.26669551201194, 22.340410017430766],
    [114.26624966109642, 22.34013043861491],
    [114.26639309664095, 22.339975037952826]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID17, floorNumber17, first_floor17, b_bottom17, b_top17, volume17);//A155

let companyID18 = 18, floorNumber18 = 1, first_floor18 = 1, b_bottom18 = 30.4, b_top18 = 58.65
let volume18 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26501267930213, 22.339614380172055],
    [114.26460859444215, 22.339329080100487],
    [114.26473987806543, 22.339161766239506],
    [114.26517244027443, 22.339448156800472],
    [114.26501267930213, 22.339614380172055]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID18, floorNumber18, first_floor18, b_bottom18, b_top18, volume18);//A201一半

let companyID19 = 19, floorNumber19 = 1, first_floor19 = 1, b_bottom19 = 33, b_top19 = 58.65
let volume19 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2658313682489, 22.340450980535667],
    [114.26626220415038, 22.340723054019108],
    [114.26612835776706, 22.340911768511198],
    [114.2656650714863, 22.340647231447658],
    [114.2658313682489, 22.340450980535667]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID19, floorNumber19, first_floor19, b_bottom19, b_top19, volume19);//A165一半

let companyID20 = 20, floorNumber20 = 1, first_floor20 = 1, b_bottom20 = 32.4, b_top20 = 36.2
let volume20 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26757701547639, 22.33963449940512],
    [114.26792743256843, 22.339869672838788],
    [114.26776134988158, 22.340088737714883],
    [114.2674097913937, 22.33985169097212],
    [114.26757701547639, 22.33963449940512]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID20, floorNumber20, first_floor20, b_bottom20, b_top20, volume20);//A132-2

let companyID21 = 21, floorNumber21 = 1, first_floor21 = 1, b_bottom21 = 29.884, b_top21 = 34.488
let volume21 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26595614469062, 22.33684354372857],
    [114.2664825324488, 22.337191351065],
    [114.26634941343734, 22.33734671643355],
    [114.26582549913817, 22.337006524180193],
    [114.26595614469062, 22.33684354372857]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID21, floorNumber21, first_floor21, b_bottom21, b_top21, volume21);//A41-2

let companyID22 = 22, floorNumber22 = 1, first_floor22 = 1, b_bottom22 = 39.9, b_top22 = 44.0443
let volume22 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26578232715278, 22.335898750889033],
    [114.26592851587428, 22.33570762339634],
    [114.26639494058645, 22.336013949137794],
    [114.26625131033978, 22.33620585695213],
    [114.26578232715278, 22.335898750889033]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID22, floorNumber22, first_floor22, b_bottom22, b_top22, volume22);//A8-4

let companyID23 = 23, floorNumber23 = 1, first_floor23 = 1, b_bottom23 = 34.488, b_top23 = 39.092
let volume23 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2673617784786,22.33653656438773],[114.26748840918525,22.336347638659063],
    [114.26735613220475,22.33625775949778],[114.26720511461733,22.336428156808275],
    [114.2673617784786,22.33653656438773]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID23, floorNumber23, first_floor23, b_bottom23, b_top23, volume23);//A1-3部分1

// let companyID24 = 24, floorNumber24 = 1, first_floor24 = 1, b_bottom24 = 44.61317372769474, b_top24 = 48.69489697993874
// let volume24 = {
//   color: 0xCCFFFF,
//   opacity: 0.4,
//   points: [
//     [114.2656756037001, 22.33841428653115],
//     [114.26580130709716, 22.338245636323986],
//     [114.26633622076992, 22.338588825234016],
//     [114.26619199427859, 22.338777482862124],
//     [114.2656756037001, 22.33841428653115]
//   ].map(function (lnglat) {
//     return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
//   }),

// }
// floorDistinguish(companyID24, floorNumber24, first_floor24, b_bottom24, b_top24, volume24);//！！！！！！！！！！！信义路29号，隆坚科技有限公司，无具体楼层及信息，暂时定在附件的A80-5

let companyID25 = 25, floorNumber25 = 1, first_floor25 = 1, b_bottom25 = 25, b_top25 = 47
let volume25 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26670141105404,22.33697021838826],[114.26690725448132,22.33670034420656],
    [114.2663206798782,22.33632276386774],[114.26613355853783,22.336577723595255],
    [114.26670141105404,22.33697021838826]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID25, floorNumber25, first_floor25, b_bottom25, b_top25, volume25);//A4整栋

let companyID26 = 26, floorNumber26 = 4, first_floor26 = 1, b_bottom26 = 26, b_top26 = 42.662237376958046
let volume26 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2651462147943, 22.336299643260034],
    [114.26571567532012, 22.336679305131277],
    [114.26557951621592, 22.336855801247115],
    [114.26501391865038, 22.33649282370324],
    [114.2651462147943, 22.336299643260034]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID26, floorNumber26, first_floor26, b_bottom26, b_top26, volume26);//A73-1,2,3,4

let companyID27 = 27, floorNumber27 = 1, first_floor27 = 1, b_bottom27 = 25, b_top27 = 36.3
let volume27 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26400367293326,22.33502433517849],[114.26474618610405,22.33551336140335],
    [114.26518904006299,22.33493572228509],[114.26489197395122,22.33476261879796],
    [114.26481997921037,22.334846911109384],[114.26436389388057,22.33457361867801],
    [114.26432484068853,22.334605880960705],[114.26402335518998,22.33441358353677],
    [114.26391666629469,22.334525743132918],[114.26394551250354,22.334551782666004],
    [114.2639141582442,22.33458969188921],[114.26396808081653,22.334634683372897],
    [114.26393610657688,22.334673684080915],[114.26398021911699,22.334711413939512],
    [114.26394553590572,22.334773228461973],[114.26395075524759,22.33497769510496],
    [114.26400367293326,22.33502433517849]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID27, floorNumber27, first_floor27, b_bottom27, b_top27, volume27);//A14,A15

let companyID28 = 28, floorNumber28 = 1, first_floor28 = 1, b_bottom28 = 25, b_top28 = 35.3
let volume28 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26524845711845, 22.33495297565877],
    [114.26601025312632, 22.335460709577283],
    [114.26549275987543, 22.336118778308393],
    [114.26520573101281, 22.335919547609492],
    [114.26541089044966, 22.335657834446074],
    [114.26515328961251, 22.335494393648062],
    [114.26496041256027, 22.335753231348487],
    [114.26473408415244, 22.335607154239693],
    [114.26524845711845, 22.33495297565877]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID28, floorNumber28, first_floor28, b_bottom28, b_top28, volume28);//A12,A13

let companyID29 = 29, floorNumber29 = 1, first_floor29 = 1, b_bottom29 = 39.913390432988386, b_top29 = 42.89200018449128
let volume29 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26643348516686,22.336322641467596],[114.2666072484897,22.336080899631035],
    [114.26655320164608,22.336038137032958],[114.2663703369564,22.336281046007844],
    [114.26643348516686,22.336322641467596]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID29, floorNumber29, first_floor29, b_bottom29, b_top29, volume29);//A5-4部分1

let companyID30 = 30, floorNumber30 = 3, first_floor30 = 1, b_bottom30 = 26, b_top30 = 39.13245601304396
let volume30 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26597685863774, 22.33563864281025],
    [114.26610886158504, 22.335462434298115],
    [114.2666047680314, 22.335774545812313],
    [114.26645201756557, 22.335968404860644],
    [114.26597685863774, 22.33563864281025]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID30, floorNumber30, first_floor30, b_bottom30, b_top30, volume30);//A7-1,2,3

let companyID31 = 31, floorNumber31 = 1, first_floor31 = 1, b_bottom31 = 31, b_top31 = 47
let volume31 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26498770196939, 22.336947444831093],
    [114.26609207340256, 22.33769939775824],
    [114.2659421756558, 22.337907446917495],
    [114.26551776176984, 22.337631681770183],
    [114.26533167267905, 22.337884373848127],
    [114.26485219373419, 22.33754197787511],
    [114.26501734331681, 22.337310286246925],
    [114.26481244119286, 22.337150555315198],
    [114.26498770196939, 22.336947444831093]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID31, floorNumber31, first_floor31, b_bottom31, b_top31, volume31);//A52,A53,A75

let companyID32 = 32, floorNumber32 = 1, first_floor32 = 1, b_bottom32 = 31.81327775838098, b_top32 = 36.002557913660965
let volume32 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26816574546353,22.339649567557974],[114.26793979469515,22.339485307231463],
    [114.26780534230541,22.339652049475095],[114.26806303907463,22.339807387799333],
    [114.26816574546353,22.339649567557974]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID32, floorNumber32, first_floor32, b_bottom32, b_top32, volume32);//A130-2一半

let companyID33 = 33, floorNumber33 = 1, first_floor33 = 1, b_bottom33 = 27.62, b_top33 = 31.986155025088614
let volume33 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26402186827232,22.337739866928942],[114.2643013653163,22.337847938279268],
    [114.26439679691313,22.337656238149787],[114.26410997515161,22.337543908147616],
    [114.26402186827232,22.337739866928942]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID33, floorNumber33, first_floor33, b_bottom33, b_top33, volume33);//A34-1一半

let companyID34 = 34, floorNumber34 = 1, first_floor34 = 1, b_bottom34 = 37.68196767179538, b_top34 = 41.744568951751425
let volume34 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26433455533855, 22.33855030417884],
    [114.26441000496504, 22.33849890085331],
    [114.26446933725035, 22.338568873386656],
    [114.26453672476293, 22.338528250754504],
    [114.26469217331896, 22.338701472392838],
    [114.26482832774785, 22.338618260713172],
    [114.26487948297728, 22.33867569503164],
    [114.26491060873487, 22.33865958336965],
    [114.2649757543192, 22.338730952806433],
    [114.26467152102349, 22.338955958557072],
    [114.26433455533855, 22.33855030417884]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID34, floorNumber34, first_floor34, b_bottom34, b_top34, volume34);//A215-3

let companyID35 = 35, floorNumber35 = 1, first_floor35 = 1, b_bottom35 = 35.5, b_top35 = 63.4
let volume35 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26520714034571, 22.34046964605569],
    [114.26585882191068, 22.34090895171757],
    [114.26573454663351, 22.341075293042845],
    [114.26507849821726, 22.34063603978015],
    [114.26520714034571, 22.34046964605569]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID35, floorNumber35, first_floor35, b_bottom35, b_top35, volume35);//A174

let companyID36 = 36, floorNumber36 = 1, first_floor36 = 1, b_bottom36 = 33, b_top36 = 62
let volume36 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26597653786688, 22.34024658007414],
    [114.26558766971272, 22.339976894291123],
    [114.26570609378808, 22.3398127045646],
    [114.2661194937334, 22.340076155377318],
    [114.26597653786688, 22.34024658007414]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID36, floorNumber36, first_floor36, b_bottom36, b_top36, volume36);//A-164一半

let companyID37 = 37, floorNumber37 = 2, first_floor37 = 1, b_bottom37 = 37.03908223942128, b_top37 = 45.75189363463947
let volume37 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2652597354964, 22.338750511316483],
    [114.26595838531767, 22.339188879496863],
    [114.26579578309911, 22.339398528859345],
    [114.26511122313424, 22.338947533968064],
    [114.2652597354964, 22.338750511316483]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID37, floorNumber37, first_floor37, b_bottom37, b_top37, volume37);//A208-3,4

// let companyID38 = 38, floorNumber38 = 1, first_floor38 = 1, b_bottom38 = 39.072, b_top38 = 43.676
// let volume38 = {
//   color: 0xCCFFFF,
//   opacity: 0.4,
//   points: [
//     [114.26509984566528,22.336973087969447],
//     [114.26524163425456,22.336795568064115],
//     [114.26494847850543,22.336576549399847],
//     [114.26480266870507,22.336755018609956],
//     [114.26509984566528,22.336973087969447]
//   ].map(function (lnglat) {
//     return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
//   }),

// }
// floorDistinguish(companyID38, floorNumber38, first_floor38, b_bottom38, b_top38, volume38);//A56-4（统计上写的是前程路12号4楼）

let companyID39 = 39, floorNumber39 = 1, first_floor39 = 1, b_bottom39 = 24.681594468574414, b_top39 = 30.10085359854556
let volume39 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26742738320628, 22.337749743138136],
    [114.26750186255954, 22.337728729207285],
    [114.267997768746, 22.338053770762876],
    [114.26785788190244, 22.338252041291955],
    [114.26752883786688, 22.338029512066797],
    [114.26733947573202, 22.3382821647794],
    [114.26713700739862, 22.338146574332743],
    [114.26742738320628, 22.337749743138136]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID39, floorNumber39, first_floor39, b_bottom39, b_top39, volume39);//信义路28-1号1楼

let companyID40 = 40, floorNumber40 = 1, first_floor40 = 1, b_bottom40 = 27.9789, b_top40 = 48.9
let volume40 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26365698386357, 22.33570492968446],
    [114.26365491991335, 22.335825476674696],
    [114.26344672781566, 22.335839222132947],
    [114.263427479444, 22.336155488793505],
    [114.2632366889285, 22.33615605440966],
    [114.26325365213985, 22.335841497243123],
    [114.26343655117014, 22.335718903726658],
    [114.26365698386357, 22.33570492968446]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID40, floorNumber40, first_floor40, b_bottom40, b_top40, volume40);//前程路5号A栋

let companyID41 = 41, floorNumber41 = 1, first_floor41 = 1, b_bottom41 = 27.9789, b_top41 = 32.1007
let volume41 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2676660370636,22.34035310257171],[114.26766814275877,22.340133930214595],[114.26743679251605,22.340137493256112],[114.26743741331387,22.340347837262893],[114.2676660370636,22.34035310257171]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID41, floorNumber41, first_floor41, b_bottom41, b_top41, volume41);//A137-1half

companyID = 42,floorNumber = 1, first_floor = 1, b_bottom = 27.9789, b_top = 32.1007
let volume42 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26787102984929,22.34014462154548],[114.26786359986508,22.340349044097717],[114.26766515685449,22.34035125157001],[114.26766795652733,22.340136070930786],[114.26787102984929,22.34014462154548]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume42);//A137-1half

companyID = 43,floorNumber = 1, first_floor = 1, b_bottom = 32.1007, b_top = 36
let volume43 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26743711586172,22.340349656595908],[114.26786155787796,22.340350102128074],[114.26786474881253,22.340140475760826],[114.26744488844314,22.340137405559034],[114.26743711586172,22.340349656595908]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume43);//A137-2

companyID = 44, floorNumber = 1, first_floor = 1, b_bottom = 28.6, b_top = 32.4
let volume44 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26757701547639, 22.33963449940512],
    [114.26792743256843, 22.339869672838788],
    [114.26776134988158, 22.340088737714883],
    [114.2674097913937, 22.33985169097212],
    [114.26757701547639, 22.33963449940512]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume44);//A132-2

companyID = 45, floorNumber = 1, first_floor = 1, b_bottom = 36.2, b_top = 40.0
let volume45 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26757701547639, 22.33963449940512],
    [114.26792743256843, 22.339869672838788],
    [114.26776134988158, 22.340088737714883],
    [114.2674097913937, 22.33985169097212],
    [114.26757701547639, 22.33963449940512]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume45);//A132-3

companyID = 46, floorNumber = 1, first_floor = 1, b_bottom = 40.0, b_top = 43.8
let volume46 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26757701547639, 22.33963449940512],
    [114.26792743256843, 22.339869672838788],
    [114.26776134988158, 22.340088737714883],
    [114.2674097913937, 22.33985169097212],
    [114.26757701547639, 22.33963449940512]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume46);//A132-4

companyID = 47,floorNumber = 2, first_floor = 1, b_bottom = 36, b_top = 43.4
let volume47 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26743711586172,22.340349656595908],[114.26786155787796,22.340350102128074],[114.26786474881253,22.340140475760826],[114.26744488844314,22.340137405559034],[114.26743711586172,22.340349656595908]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume47);//A137-3,4

companyID = 48,floorNumber = 3, first_floor = 1, b_bottom = 27.55, b_top = 41.9875
let volume48 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26456693067728,22.337633452748726],[114.26466602220141,22.337421923379452],[114.26408429457439,22.337209325779902],[114.26399729176006,22.337397154135424],[114.26456693067728,22.337633452748726]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume48);//A31-1,3

companyID = 49,floorNumber = 1, first_floor = 1, b_bottom = 32.3625, b_top = 37.175
let volume49 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26456693067728,22.337633452748726],[114.26466602220141,22.337421923379452],[114.26408429457439,22.337209325779902],[114.26399729176006,22.337397154135424],[114.26456693067728,22.337633452748726]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume49);//A31-2

companyID = 50,floorNumber = 1, first_floor = 1, b_bottom = 41.9875, b_top = 46.8
let volume50 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429894448749,22.337530046297786],[114.26455469017132,22.33762276027527],[114.26464264196221,22.337417129712854],[114.26439302595375,22.33732016197812],[114.26429894448749,22.337530046297786]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume50);//A31-4half

companyID = 51,floorNumber = 1, first_floor = 1, b_bottom = 41.9875, b_top = 46.8
let volume51 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429085592574,22.337531262583546],[114.26438997661926,22.337321244423087],[114.26408429457439,22.337209325779902],[114.26399729176006,22.337397154135424],[114.26429085592574,22.337531262583546]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume51);//A31-4half

companyID = 52,floorNumber = 1, first_floor = 1, b_bottom = 33.58483, b_top = 37.7675
let volume52 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26455349139907,22.338823551455196],[114.26470013496706,22.3386982463701],
    [114.26453733208488,22.338521370729],[114.26448239963285,22.33855901741237],
    [114.26441356931794,22.338499319162874],[114.26434142723984,22.338556781426483],
    [114.26455349139907,22.338823551455196]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume52);//A215-2half

companyID = 53,floorNumber = 1, first_floor = 1, b_bottom = 46.74075, b_top = 51.17
let volume53 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26433455533855, 22.33855030417884],
    [114.26441000496504, 22.33849890085331],
    [114.26446933725035, 22.338568873386656],
    [114.26453672476293, 22.338528250754504],
    [114.26469217331896, 22.338701472392838],
    [114.26482832774785, 22.338618260713172],
    [114.26487948297728, 22.33867569503164],
    [114.26491060873487, 22.33865958336965],
    [114.2649757543192, 22.338730952806433],
    [114.26467152102349, 22.338955958557072],
    [114.26433455533855, 22.33855030417884]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume53);//A215-5

companyID = 54,floorNumber = 1, first_floor = 1, b_bottom = 41.744568951751425, b_top = 46.74075
let volume54 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26455349139907,22.338823551455196],[114.26470013496706,22.3386982463701],
    [114.26453733208488,22.338521370729],[114.26448239963285,22.33855901741237],
    [114.26441356931794,22.338499319162874],[114.26434142723984,22.338556781426483],
    [114.26455349139907,22.338823551455196]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume54);//A215-4half

companyID = 55,floorNumber = 1, first_floor = 1, b_bottom = 33.58483, b_top = 37.7675
let volume55 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26455870643294,22.338833827629816],[114.26467148753366,22.338959458380884],
    [114.26497359843489,22.33873118763436],[114.26490964817903,22.338661703132487],
    [114.26487495413953,22.338671895093476],[114.26481281989643,22.33861749256923],
    [114.26469355408057,22.338704443357926],[114.26455870643294,22.338833827629816]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume55);//A215-2half

companyID = 56,floorNumber = 1, first_floor = 1, b_bottom = 41.744568951751425, b_top = 46.74075
let volume56 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26455870643294,22.338833827629816],[114.26467148753366,22.338959458380884],
    [114.26497359843489,22.33873118763436],[114.26490964817903,22.338661703132487],
    [114.26487495413953,22.338671895093476],[114.26481281989643,22.33861749256923],
    [114.26469355408057,22.338704443357926],[114.26455870643294,22.338833827629816]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume56);//A215-4half

companyID = 57,floorNumber = 1, first_floor = 1, b_bottom = 28.8228, b_top = 33.58483
let volume57 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26455349139907,22.338823551455196],[114.26470013496706,22.3386982463701],
    [114.26453733208488,22.338521370729],[114.26448239963285,22.33855901741237],
    [114.26441356931794,22.338499319162874],[114.26434142723984,22.338556781426483],
    [114.26455349139907,22.338823551455196]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume57);//A215-1half

companyID = 58,floorNumber = 1, first_floor = 1, b_bottom = 28.8228, b_top = 33.58483
let volume58 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26455870643294,22.338833827629816],[114.26467148753366,22.338959458380884],
    [114.26497359843489,22.33873118763436],[114.26490964817903,22.338661703132487],
    [114.26487495413953,22.338671895093476],[114.26481281989643,22.33861749256923],
    [114.26469355408057,22.338704443357926],[114.26455870643294,22.338833827629816]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume58);//A215-1half

companyID = 59,floorNumber = 1, first_floor = 1, b_bottom = 39.072, b_top = 43.676
let volume59 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26510437720447,22.33696126840499],[114.26533932004116,22.337120272094317],
    [114.26547902335203,22.336935242317423],[114.26525732835992,22.336788090616537],
    [114.26510437720447,22.33696126840499]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume59);//A56-4部分

companyID = 60,floorNumber = 1, first_floor = 1, b_bottom = 34.648, b_top = 39.072
let volume60 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26510437720447,22.33696126840499],[114.26533932004116,22.337120272094317],
    [114.26547902335203,22.336935242317423],[114.26525732835992,22.336788090616537],
    [114.26510437720447,22.33696126840499]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume60);//A56-3half

companyID = 61,floorNumber = 1, first_floor = 1, b_bottom = 30.8023, b_top = 34.648
let volume61 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26510437720447,22.33696126840499],[114.26533932004116,22.337120272094317],
    [114.26547902335203,22.336935242317423],[114.26525732835992,22.336788090616537],
    [114.26510437720447,22.33696126840499]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume61);//A56-2half

companyID = 62,floorNumber = 1, first_floor = 1, b_bottom = 30.8023, b_top = 34.648
let volume62 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26509984566528,22.336973087969447],
    [114.26524163425456,22.336795568064115],
    [114.26494847850543,22.336576549399847],
    [114.26480266870507,22.336755018609956],
    [114.26509984566528,22.336973087969447]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume62);//A56-2half

companyID = 63,floorNumber = 1, first_floor = 1, b_bottom = 34.72, b_top = 38.94
let volume63 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2657401823126, 22.337109852939406],
    [114.26626819554133, 22.337470199425177],
    [114.266133859376, 22.33763651271257],
    [114.2655995077844, 22.33729609570573],
    [114.2657401823126, 22.337109852939406]
    
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume63);//A45-3

companyID = 64, floorNumber = 1, first_floor = 1, b_bottom = 39.072, b_top = 43.676
let volume64 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26509969872458,22.336981426603963],[114.26524770882091,22.336805347619038],
    [114.26509294114058,22.3366973584352],[114.26494922772041,22.336880710127605],
    [114.26509969872458,22.336981426603963]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume64);//A56-4（统计上写的是前程路12号4楼）

companyID = 65, floorNumber = 1, first_floor = 1, b_bottom = 39.092, b_top = 42.2921
let volume65 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26608571715077,22.33718783908168],[114.26634268220934,22.33736046133346],
    [114.26648135565414,22.337191949231954],[114.26623823554904,22.337030885850552],
    [114.26608571715077,22.33718783908168]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume65);//A41-4half

companyID = 66, floorNumber = 1, first_floor = 1, b_bottom = 39.072, b_top = 43.676
let volume66 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26495762812378,22.336874689264082],[114.26509532968912,22.336691633276743],
    [114.2649491388856,22.336589682201904],[114.26480426369376,22.336768178591146],
    [114.26495762812378,22.336874689264082]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume66);//A56-4部分

companyID = 67, floorNumber = 1, first_floor = 1, b_bottom = 39.092, b_top = 42.2921
let volume67 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26583536258147,22.337022922113142],[114.26606899785166,22.337199323630454],
    [114.26623399368167,22.337038700668387],[114.26596208832136,22.33683848684411],
    [114.26583536258147,22.337022922113142]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume67);//A41-4half

companyID = 68, floorNumber = 1, first_floor = 1, b_bottom = 42.9522, b_top = 47.17
let volume68 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26458884907365,22.33595717978257],[114.26468568444065,22.33575816418901],
    [114.264080450572,22.335537001014416],[114.26398841820243,22.335722250521705],
    [114.26458884907365,22.33595717978257]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume68);//A21-5

companyID = 69, floorNumber = 1, first_floor = 1, b_bottom = 43.1769, b_top = 47.3
let volume69 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26416555221915,22.336158650413267],[114.26425418756412,22.335958921760152],
    [114.2640505919227,22.335870087349345],[114.26396494425859,22.336047121111573],
    [114.26416555221915,22.336158650413267]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume69);//A24-5部分

companyID = 70, floorNumber = 1, first_floor = 1, b_bottom = 26.5075, b_top = 31.65894
let volume70 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429571659374,22.336556863971175],[114.26437073002023,22.336345251926126],
    [114.26406518714205,22.33622659849431],[114.26397677685893,22.33640325524815],
    [114.26429571659374,22.336556863971175]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume70);//A26-1half

companyID = 71, floorNumber = 1, first_floor = 1, b_bottom = 30.7454, b_top = 34.6261
let volume71 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26416555221915,22.336158650413267],[114.26425418756412,22.335958921760152],
    [114.2640505919227,22.335870087349345],[114.26396494425859,22.336047121111573],
    [114.26416555221915,22.336158650413267]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume71);//A24-2部分

companyID = 72, floorNumber = 1, first_floor = 1, b_bottom = 38.39797, b_top = 42.9522
let volume72 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26397811795823,22.33573344940272],[114.26428672141186,22.33587790213397],
    [114.2643947414584,22.335660541878624],[114.26407664841516,22.33553466668176],
    [114.26397811795823,22.33573344940272]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume72);//A21-4half

companyID = 73, floorNumber = 1, first_floor = 1, b_bottom = 30.75006, b_top = 34.11516
let volume73 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26397811795823,22.33573344940272],[114.26428672141186,22.33587790213397],
    [114.2643947414584,22.335660541878624],[114.26407664841516,22.33553466668176],
    [114.26397811795823,22.33573344940272]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume73);//A21-2half

companyID = 74, floorNumber = 1, first_floor = 1, b_bottom = 38.567024921579645, b_top = 42.67238416852666
let volume74 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26457395033084,22.336640709123778],[114.26466927375715,22.336439372313393],
    [114.26405968083814,22.33620331603006],[114.26396855070773,22.33642313072733],
    [114.26457395033084,22.336640709123778]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume74);//A26-4

companyID = 75, floorNumber = 1, first_floor = 1, b_bottom =42.67238416852666, b_top = 47.51
let volume75 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429571659374,22.336556863971175],[114.26437073002023,22.336345251926126],
    [114.26406518714205,22.33622659849431],[114.26397677685893,22.33640325524815],
    [114.26429571659374,22.336556863971175]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume75);//A26-5half

companyID = 76, floorNumber = 1, first_floor = 1, b_bottom =35.413034356290055, b_top = 38.567024921579645
let volume76 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26428253512618,22.33654554026062],[114.26457055631951,22.33665469259713],
    [114.26466226166427,22.336459098949266],[114.26438855991692,22.336342146913882],
    [114.26428253512618,22.33654554026062]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume76);//A26-3half

companyID = 77, floorNumber = 1, first_floor = 1, b_bottom =42.67238416852666, b_top = 47.51
let volume77 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26428253512618,22.33654554026062],[114.26457055631951,22.33665469259713],
    [114.26466226166427,22.336459098949266],[114.26438855991692,22.336342146913882],
    [114.26428253512618,22.33654554026062]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume77);//A26-5half

companyID = 78, floorNumber = 1, first_floor = 1, b_bottom =35.413034356290055, b_top = 38.567024921579645
let volume78 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429571659374,22.336556863971175],[114.26437073002023,22.336345251926126],
    [114.26406518714205,22.33622659849431],[114.26397677685893,22.33640325524815],
    [114.26429571659374,22.336556863971175]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume78);//A26-3half

companyID = 79, floorNumber = 1, first_floor = 1, b_bottom = 31.65894, b_top = 35.413034356290055
let volume79 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26457395033084,22.336640709123778],[114.26466927375715,22.336439372313393],
    [114.26405968083814,22.33620331603006],[114.26396855070773,22.33642313072733],
    [114.26457395033084,22.336640709123778]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume79);//A26-2

companyID = 80, floorNumber = 1, first_floor = 1, b_bottom = 34.11516, b_top = 38.39797
let volume80 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26397811795823,22.33573344940272],[114.26428672141186,22.33587790213397],
    [114.2643947414584,22.335660541878624],[114.26407664841516,22.33553466668176],
    [114.26397811795823,22.33573344940272]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume80);//A21-3half

companyID = 81, floorNumber = 1, first_floor = 1, b_bottom = 38.20788229959393, b_top = 43.1769
let volume81 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26416555221915,22.336158650413267],[114.26425418756412,22.335958921760152],
    [114.2640505919227,22.335870087349345],[114.26396494425859,22.336047121111573],
    [114.26416555221915,22.336158650413267]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume81);//A24-4部分

companyID = 82, floorNumber = 1, first_floor = 1, b_bottom = 26.42, b_top = 30.75006
let volume82 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26397811795823,22.33573344940272],[114.26428672141186,22.33587790213397],
    [114.2643947414584,22.335660541878624],[114.26407664841516,22.33553466668176],
    [114.26397811795823,22.33573344940272]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume82);//A21-1half

companyID = 83, floorNumber = 1, first_floor = 1, b_bottom = 38.39797, b_top = 42.9522
let volume83 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429602977163,22.335871317892185],[114.2645757694482,22.33596397625365],
    [114.26470780690006,22.335782483486273],[114.2643988978289,22.33565128428435],
    [114.26429602977163,22.335871317892185]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume83);//A21-4half

companyID = 84, floorNumber = 1, first_floor = 1, b_bottom = 30.75006, b_top = 34.11516
let volume84 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429602977163,22.335871317892185],[114.2645757694482,22.33596397625365],
    [114.26470780690006,22.335782483486273],[114.2643988978289,22.33565128428435],
    [114.26429602977163,22.335871317892185]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume84);//A21-2half

companyID = 85, floorNumber = 1, first_floor = 1, b_bottom = 26.42, b_top = 30.75006
let volume85 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429602977163,22.335871317892185],[114.2645757694482,22.33596397625365],
    [114.26470780690006,22.335782483486273],[114.2643988978289,22.33565128428435],
    [114.26429602977163,22.335871317892185]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume85);//A21-1half

companyID = 86, floorNumber = 1, first_floor = 1, b_bottom = 34.6261, b_top = 38.20788229959393
let volume86 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26396816048829,22.33605828100104],[114.26456621464266,22.33629279722059],
    [114.26464811947591,22.336096531821894],[114.26405138448413,22.33586902581758],
    [114.26396816048829,22.33605828100104]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume86);//A24-3

companyID = 87, floorNumber = 1, first_floor = 1, b_bottom = 38.20788229959393, b_top = 43.1769
let volume87 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26418449886106,22.336149083762017],[114.26433861575934,22.336207667541956],
    [114.26443635874023,22.336028834645763],[114.2642558316589,22.335957221199603],
    [114.26418449886106,22.336149083762017]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume87);//A24-4部分,5部分

companyID = 88, floorNumber = 1, first_floor = 1, b_bottom = 43.1769, b_top = 47.3
let volume88 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26433585968891,22.33620769046198],[114.26456451892895,22.336292418182637],
    [114.26463439499935,22.336110089369154],[114.26443577890923,22.336029918179246],
    [114.26433585968891,22.33620769046198]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume88);//A24-5部分

companyID = 89, floorNumber = 1, first_floor = 1, b_bottom = 43.1769, b_top = 47.3
let volume89 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26418449886106,22.336149083762017],[114.26433861575934,22.336207667541956],
    [114.26443635874023,22.336028834645763],[114.2642558316589,22.335957221199603],
    [114.26418449886106,22.336149083762017]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume89);//A24-5部分

companyID = 90, floorNumber = 1, first_floor = 1, b_bottom = 26.304255869235366, b_top = 31.208247592476646
let volume90 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26396816048829,22.33605828100104],[114.26456621464266,22.33629279722059],
    [114.26464811947591,22.336096531821894],[114.26405138448413,22.33586902581758],
    [114.26396816048829,22.33605828100104]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume90);//A24-1

companyID = 91, floorNumber = 1, first_floor = 1, b_bottom =26.5075, b_top = 31.65894
let volume91 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26428253512618,22.33654554026062],[114.26457055631951,22.33665469259713],
    [114.26466226166427,22.336459098949266],[114.26438855991692,22.336342146913882],
    [114.26428253512618,22.33654554026062]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume91);//A26-1half

companyID = 92, floorNumber = 1, first_floor = 1, b_bottom = 34.11516, b_top = 38.39797
let volume92 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26429602977163,22.335871317892185],[114.2645757694482,22.33596397625365],
    [114.26470780690006,22.335782483486273],[114.2643988978289,22.33565128428435],
    [114.26429602977163,22.335871317892185]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume92);//A21-3half

//2020年到期 15家

companyID = 93, floorNumber = 1, first_floor = 1, b_bottom = 27.5174, b_top = 36.20
let volume93 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2675607613747,22.339482387532122],[114.26762701878191,22.339529514256967],
    [114.26774912790195,22.3393713449343],[114.26767986822557,22.33932673811208],
    [114.2675607613747,22.339482387532122]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume93);//A129

companyID = 94, floorNumber = 1, first_floor = 1, b_bottom = 39.86496227584028, b_top = 44.29194168063461
let volume94 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26775393277944, 22.339371625918602],
    [114.26762465723316, 22.339535135671362],
    [114.26805393219273, 22.33980680041978],
    [114.26816757094439, 22.339648534806845],
    [114.26775393277944, 22.339371625918602]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume94);//A130-4

companyID = 95, floorNumber = 1, first_floor = 1, b_bottom = 26.3, b_top = 44.29194168063461
let volume95 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2665815497103,22.338278182067807],[114.26670514826517,22.338109053907488],
    [114.26618081225277,22.337762539844164],[114.26604345946379,22.337931227729015],
    [114.2665815497103,22.338278182067807]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume95);//A50

companyID = 96, floorNumber = 1, first_floor = 1, b_bottom = 36.002557913660965, b_top = 39.86496227584028
let volume96 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26775393277944, 22.339371625918602],
    [114.26762465723316, 22.339535135671362],
    [114.26805393219273, 22.33980680041978],
    [114.26816757094439, 22.339648534806845],
    [114.26775393277944, 22.339371625918602]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume96);//A130-3

companyID = 97, floorNumber = 1, first_floor = 1, b_bottom = 27.42973569805419, b_top = 31.81327775838098
let volume97 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26775393277944, 22.339371625918602],
    [114.26762465723316, 22.339535135671362],
    [114.26805393219273, 22.33980680041978],
    [114.26816757094439, 22.339648534806845],
    [114.26775393277944, 22.339371625918602]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume97);//A130-1

companyID = 98, floorNumber = 1, first_floor = 1, b_bottom = 31.81327775838098, b_top = 36.002557913660965
let volume98 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26793725777839,22.3394863611958],[114.26775820572301,22.339368193908182],
    [114.26762475558002,22.33953447873503],[114.26780671549471,22.339654716275405],
    [114.26793725777839,22.3394863611958]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume98);//A130-2half

companyID = 99, floorNumber = 1, first_floor = 1, b_bottom = 26.43, b_top = 30.8023
let volume99 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2649284963755, 22.3365998377321],
    [114.26545953206885, 22.33694474101652],
    [114.26534001352309, 22.33710326518596],
    [114.26480372395714, 22.33675829063154],
    [114.2649284963755, 22.3365998377321]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume99);//A56-1

companyID = 100, floorNumber = 1, first_floor = 1, b_bottom = 42.662237376958046, b_top = 46.48
let volume100 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2651462147943, 22.336299643260034],
    [114.26571567532012, 22.336679305131277],
    [114.26557951621592, 22.336855801247115],
    [114.26501391865038, 22.33649282370324],
    [114.2651462147943, 22.336299643260034]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume100);//A73-5

companyID = 101, floorNumber = 1, first_floor = 1, b_bottom = 31.733104436476033, b_top = 46.72
let volume101 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26536597845121,22.337113382767683],[114.26558521862145,22.33727511262856],
    [114.26571527183165,22.337104555909537],[114.26549202694397,22.336952342845745],
    [114.26536597845121,22.337113382767683]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume101);//A54-1-2,3,4,5

companyID = 102, floorNumber = 1, first_floor = 1, b_bottom = 42.2921, b_top = 46.5
let volume102 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26595614469062, 22.33684354372857],
    [114.2664825324488, 22.337191351065],
    [114.26634941343734, 22.33734671643355],
    [114.26582549913817, 22.337006524180193],
    [114.26595614469062, 22.33684354372857]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume102);//A41-5

companyID = 103, floorNumber = 1, first_floor = 1, b_bottom = 25.1, b_top = 31.026063534458736
let volume103 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26690487336982,22.336160984764376],[114.26715300991376,22.336322733799083],
    [114.2672964590197,22.336132502626256],[114.26707573697266,22.335977128122508],
    [114.26690487336982,22.336160984764376]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume103);//A6-1half

//2021年到期 6家

companyID = 104, floorNumber = 1, first_floor = 1, b_bottom = 40.37707163248077, b_top = 44.0303639176313
let volume104 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26411094967648, 22.337544180925956],
    [114.26466146022284, 22.337759819862924],
    [114.26458618752237, 22.337956147042814],
    [114.26402105659763, 22.337740250918113],
    [114.26411094967648, 22.337544180925956]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume104);//A34-4

companyID = 105, floorNumber = 1, first_floor = 1, b_bottom = 32.43184166038506, b_top = 36.04688821879651
let volume105 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26411094967648, 22.337544180925956],
    [114.26466146022284, 22.337759819862924],
    [114.26458618752237, 22.337956147042814],
    [114.26402105659763, 22.337740250918113],
    [114.26411094967648, 22.337544180925956]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume105);//A34-2

companyID = 106, floorNumber = 1, first_floor = 1, b_bottom = 27.62, b_top = 31.986155025088614
let volume106 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26430242076097,22.337854452671785],[114.26457775986533,22.337952270022583],
    [114.26466235864042,22.337756903565165],[114.26439699812356,22.337656212956865],
    [114.26430242076097,22.337854452671785]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume106);//A34-1half

companyID = 107, floorNumber = 1, first_floor = 1, b_bottom = 36.04688821879651, b_top = 40.37707163248077
let volume107 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26430242076097,22.337854452671785],[114.26457775986533,22.337952270022583],
    [114.26466235864042,22.337756903565165],[114.26439699812356,22.337656212956865],
    [114.26430242076097,22.337854452671785]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume107);//A34-3half

companyID = 108, floorNumber = 1, first_floor = 1, b_bottom = 36.04688821879651, b_top = 40.37707163248077
let volume108 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26402186827232,22.337739866928942],[114.2643013653163,22.337847938279268],
    [114.26439679691313,22.337656238149787],[114.26410997515161,22.337543908147616],
    [114.26402186827232,22.337739866928942]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume108);//A34-3half

companyID = 109, floorNumber = 1, first_floor = 1, b_bottom = 24.1, b_top = 45.9
let volume109 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2667683130971,22.33697725614153],[114.2673072348245,22.337332357174045],
    [114.2674310783525,22.33716954246849],[114.26690976173161,22.33682011081299],
    [114.2667683130971,22.33697725614153]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume109);//A3

//2022到期 共71家

companyID = 110, floorNumber = 1, first_floor = 1, b_bottom = 24.1, b_top = 45.9
let volume110 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26488854146454,22.33791178463365],[114.264895096272,22.3381452406972],
    [114.26546987903959,22.338526137640592],[114.26568918672119,22.33823767090507],
    [114.26500683421945,22.337782886585615],[114.26488854146454,22.33791178463365]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume110);//A3

companyID = 111, floorNumber = 1, first_floor = 1, b_bottom = 26.1, b_top = 32.49712864869409
let volume111 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2656756037001, 22.33841428653115],
    [114.26580130709716, 22.338245636323986],
    [114.26633622076992, 22.338588825234016],
    [114.26619199427859, 22.338777482862124],
    [114.2656756037001, 22.33841428653115]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume111);//A80-1

companyID = 112, floorNumber = 1, first_floor = 1, b_bottom = 32.49712864869409, b_top = 36.130505335721374
let volume112 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2656756037001, 22.33841428653115],
    [114.26580130709716, 22.338245636323986],
    [114.26633622076992, 22.338588825234016],
    [114.26619199427859, 22.338777482862124],
    [114.2656756037001, 22.33841428653115]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume112);//A80-2

companyID = 113, floorNumber = 1, first_floor = 1, b_bottom = 40.2376084108883, b_top =  44.61317372769474
let volume113 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26566544078045,22.338415094375623],[114.26594615530445,22.338603647991672],
    [114.2660974295908,22.338432610387073],[114.26580014273422,22.338244864948265],
    [114.26566544078045,22.338415094375623]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume113);//A80-4half1

companyID = 114, floorNumber = 1, first_floor = 1, b_bottom = 40.2376084108883, b_top =  44.61317372769474
let volume114 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26593931070173,22.33860370693816],[114.26618901138416,22.338777198688902],
    [114.26633060515502,22.338589849722098],[114.26609826404993,22.33843081494338],
    [114.26593931070173,22.33860370693816]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume114);//A80-4half

companyID = 115, floorNumber = 1, first_floor = 1, b_bottom = 27.28, b_top = 32.424
let volume115 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26598961157805, 22.33801167388928],
    [114.26652521649365, 22.338345921941762],
    [114.26639986694947, 22.338528148944704],
    [114.26584755836829, 22.338157218087876],
    [114.26598961157805, 22.33801167388928]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume115);//A79-1

//2022到期中的一凡塑胶制品公司信息应有误，故跳过116编号！！！！！！！！！！！！！！！！！！！！！！！！！

companyID = 117, floorNumber = 1, first_floor = 1, b_bottom = 42.89031650771062, b_top = 48
let volume117 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26578979235053,22.336358923164813],[114.26599530449488,22.336504497321695],
    [114.26616812812954,22.336277854475927],[114.26596310458018,22.336140978841335],
    [114.26578979235053,22.336358923164813]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume117);//A9-5half

companyID = 118, floorNumber = 1, first_floor = 1, b_bottom = 26.2, b_top = 48
let volume118 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26701839483403,22.338811280567445],[114.26736633451156,22.339043887943934],
    [114.267484619868,22.338895375723684],[114.2671364045601,22.338660718704073],
    [114.26701839483403,22.338811280567445]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume118);//A118

companyID = 119, floorNumber = 1, first_floor = 1, b_bottom = 38.48825327328161, b_top = 42.61455301355837
let volume119 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26529873081702,22.336683001261395],[114.26558052543227,22.336861395355672],
    [114.2657200616587,22.336675928431347],[114.26546148711908,22.336502940530657],
    [114.26529873081702,22.336683001261395]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume119);//A73-4部分

companyID = 120, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume120 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26562759523502,22.336261765730963],[114.26579345565881,22.336037866863162],
    [114.2657277785355,22.335982081043863],[114.26554582605597,22.3362022992453],
    [114.26562759523502,22.336261765730963]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume120);//A9-4部分1

companyID = 121, floorNumber = 1, first_floor = 1, b_bottom = 31.316408220041996, b_top = 35.197767206084464
let volume121 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26599750914673,22.336503581290177],[114.26616566324458,22.336274502691523],
    [114.26573420024786,22.335989525199558],[114.26554102480166,22.336206224716243],
    [114.26599750914673,22.336503581290177]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume121);//A9-2

companyID = 122, floorNumber = 1, first_floor = 1, b_bottom = 42.89031650771062, b_top = 48
let volume122 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26562759523502,22.336261765730963],[114.26579345565881,22.336037866863162],
    [114.2657277785355,22.335982081043863],[114.26554582605597,22.3362022992453],
    [114.26562759523502,22.336261765730963]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume122);//A9-5部分1

companyID = 123, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume123 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26657878116178,22.33641376403863],[114.26676162242975,22.33618639757133],
    [114.26667137001628,22.33611329872395],[114.26647332973972,22.336350100056976],
    [114.26657878116178,22.33641376403863]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume123);//A5-4部分2

companyID = 124, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume124 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26742471382308,22.337042823399464],[114.26759672918774,22.33680555159722],
    [114.26750343884387,22.33674267981192],[114.26732551795561,22.336981004672353],
    [114.26742471382308,22.337042823399464]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume124);//A2-4部分3

companyID = 125, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume125 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26589351415276,22.33642460148989],[114.26605177958098,22.336215420397522],
    [114.26595303320521,22.336148673765365],[114.26578214591174,22.33634564158759],
    [114.26589351415276,22.33642460148989]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume125);//A9-4部分4

companyID = 126, floorNumber = 1, first_floor = 1, b_bottom = 34.488, b_top = 39.092
let volume126 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26755132452273,22.336664296065184],[114.26767198206882,22.336477008332764],
    [114.26748665296114,22.336346059800576],[114.26735297909418,22.336528635368563],
    [114.26755132452273,22.336664296065184]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume126);//A1-3部分2

companyID = 127, floorNumber = 1, first_floor = 1, b_bottom = 25.8, b_top = 34.88217759345918
let volume127 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26690166852158,22.336162900664444],[114.26707628511838,22.33597743564936],
    [114.26676586685618,22.335787759764273],[114.26663273176948,22.335959230787243],
    [114.26690166852158,22.336162900664444]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume127);//A6-1half,2half

companyID = 128, floorNumber = 1, first_floor = 1, b_bottom = 25.28, b_top = 29.884
let volume128 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26775331816333,22.33677301515213],[114.267883998294,22.33659545196779],
    [114.26761476866204,22.33642627332909],[114.26744654377832,22.336585729415756],
    [114.26775331816333,22.33677301515213]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume128);//A1-1half2

companyID = 129, floorNumber = 1, first_floor = 1, b_bottom = 42.82625102769284, b_top = 46.535803348869266
let volume129 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2673617784786,22.33653656438773],[114.26748840918525,22.336347638659063],
    [114.26735613220475,22.33625775949778],[114.26720511461733,22.336428156808275],
    [114.2673617784786,22.33653656438773]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume129);//A1-5部分1

companyID = 130, floorNumber = 1, first_floor = 1, b_bottom = 35.149848560062225, b_top = 39.913390432988386
let volume130 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26604118712834,22.33608948574898],[114.26619792514639,22.335882622622833],
    [114.26593588085879,22.335713168691257],[114.26579297078803,22.33591594304057],
    [114.26604118712834,22.33608948574898]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume130);//A8-3部分1

companyID = 131, floorNumber = 1, first_floor = 1, b_bottom = 35.149848560062225, b_top = 39.913390432988386
let volume131 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26666230418532,22.336467458786377],[114.26685530147145,22.336247720225376],
    [114.26657605244942,22.336063106594274],[114.26639545612895,22.336282040499448],
    [114.26666230418532,22.336467458786377]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume131);//A5-3half

companyID = 132, floorNumber = 1, first_floor = 1, b_bottom = 42.82640437746003, b_top = 47
let volume132 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2671516231221,22.336854207251754],[114.26734036651187,22.33662798794344],
    [114.26716083534667,22.336502888022274],[114.26697796716952,22.336742021808135],
    [114.2671516231221,22.336854207251754]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume132);//A2-5部分1

companyID = 133, floorNumber = 1, first_floor = 1, b_bottom = 31.138775785451788, b_top = 35.149848560062225
let volume133 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26578232715278, 22.335898750889033],
    [114.26592851587428, 22.33570762339634],
    [114.26639494058645, 22.336013949137794],
    [114.26625131033978, 22.33620585695213],
    [114.26578232715278, 22.335898750889033]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume133);//A8-2

companyID = 134, floorNumber = 1, first_floor = 1, b_bottom = 35.149848560062225, b_top = 39.913390432988386
let volume134 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26691036454703,22.33663384079866],[114.26707980190506,22.336413057338003],
    [114.2668565006403,22.336243987921677],[114.26665873842755,22.336467692520344],
    [114.26691036454703,22.33663384079866]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume134);//A5-3half

companyID = 135, floorNumber = 1, first_floor = 1, b_bottom = 42.89031650771062, b_top = 48
let volume135 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26578259766003,22.33637158702328],[114.26596929106124,22.336153311589833],
    [114.26580398017776,22.336039546196464],[114.2656301851911,22.336249433861333],
    [114.26578259766003,22.33637158702328]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume135);//A9-5half2

companyID = 136, floorNumber = 1, first_floor = 1, b_bottom = 39.309160071781655, b_top = 43.23947930270607
let volume136 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26715286632714,22.33632738009978],[114.26729827894137,22.33614348659754],
    [114.26676808473478,22.335784593499938],[114.2666216336789,22.335964155674283],
    [114.26715286632714,22.33632738009978]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume136);//A6-4

companyID = 137, floorNumber = 1, first_floor = 1, b_bottom = 38.287641074096456, b_top = 42.82640437746003
let volume137 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26707472995199,22.336809961944372],[114.26726717618678,22.336577012127414],
    [114.2671520524923,22.336500566461957],[114.26696349717356,22.33673828602938],
    [114.26707472995199,22.336809961944372]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume137);//A2-4部分1

companyID = 138, floorNumber = 1, first_floor = 1, b_bottom = 30.32346915291753, b_top = 34.240382849790876
let volume138 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2671516231221,22.336854207251754],[114.26734036651187,22.33662798794344],
    [114.26716083534667,22.336502888022274],[114.26697796716952,22.336742021808135],
    [114.2671516231221,22.336854207251754]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume138);//A2-2部分1

companyID = 139, floorNumber = 1, first_floor = 1, b_bottom = 39.092, b_top = 42.82625102769284
let volume139 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26774475992335,22.336780657931357],[114.26786986942318,22.336614165338975],
    [114.26735233503805,22.336258764627647],[114.26720720307463,22.336425039101712],
    [114.26774475992335,22.336780657931357]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume139);//A1-4

companyID = 140, floorNumber = 1, first_floor = 1, b_bottom = 31.13653061561608, b_top = 35.149848560062225
let volume140 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26648574640915,22.336351399652344],[114.26667080089277,22.336120266559224],
    [114.26655644585534,22.336041195898854],[114.26639265784249,22.336274343863252],
    [114.26648574640915,22.336351399652344]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume140);//A5-2部分

companyID = 141, floorNumber = 1, first_floor = 1, b_bottom = 42.82625102769284, b_top = 46.535803348869266
let volume141 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26753466088554,22.336634465285186],[114.26767625446615,22.336460200381453],
    [114.26748976623,22.336350635335112],[114.26736177580271,22.3365302645144],
    [114.26753466088554,22.336634465285186]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume141);//A1-5部分2

companyID = 142, floorNumber = 1, first_floor = 1, b_bottom = 38.287641074096456, b_top = 42.82640437746003
let volume142 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26725086623127,22.33693586852105],[114.26743906579095,22.336691205327377],
    [114.26734101901576,22.336624330713345],[114.26714171537607,22.33685876547588],
    [114.26725086623127,22.33693586852105]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume142);//A2-4部分2

companyID = 143, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume143 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2659449847007,22.336468912854386],[114.26611186978026,22.336250853874517],
    [114.2660561071039,22.336216653826],[114.26588571055183,22.336428384731676],
    [114.2659449847007,22.336468912854386]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume143);//A9-4部分5

companyID = 144, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume144 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2659499585096,22.336467201567487],[114.265999453599,22.336499375904207],
    [114.26615626108925,22.336289780689288],[114.26610973349234,22.33625137861613],
    [114.2659499585096,22.336467201567487]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume144);//A9-4部分6

companyID = 145, floorNumber = 1, first_floor = 1, b_bottom =  39.13245601304396, b_top = 48.1
let volume145 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26597685863774, 22.33563864281025],
    [114.26610886158504, 22.335462434298115],
    [114.2666047680314, 22.335774545812313],
    [114.26645201756557, 22.335968404860644],
    [114.26597685863774, 22.33563864281025]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume145);//A7-4,5

companyID = 146, floorNumber = 1, first_floor = 1, b_bottom =  25.828515082149305, b_top = 35.149848560062225
let volume146 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26656792329216,22.336418885428504],[114.26676582122775,22.336193701700648],
    [114.26666026171635,22.336121194618304],[114.2664646619051,22.336360982211296],
    [114.26656792329216,22.336418885428504]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume146);//A5-1部分,2部分

companyID = 147, floorNumber = 1, first_floor = 1, b_bottom = 34.488, b_top = 39.092
let volume147 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26774435019317,22.336770214314814],[114.26787489562739,22.3366054372854],
    [114.26768372054435,22.336479181783954],[114.26754979472449,22.336663960255304],
    [114.26774435019317,22.336770214314814]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume147);//A1-3部分3

companyID = 148, floorNumber = 1, first_floor = 1, b_bottom = 34.240382849790876, b_top = 38.287641074096456
let volume148 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26750226678874,22.33709055791717],[114.26768647237135,22.336861047670357],
    [114.26715328121445,22.336507205399],[114.26697412036958,22.33674358344757],
    [114.26750226678874,22.33709055791717]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume148);//A2-3

companyID = 149, floorNumber = 1, first_floor = 1, b_bottom = 26, b_top =  31.138775785451788
let volume149 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2659434024688,22.33601356032586],[114.26610579083737,22.335818891847953],
    [114.26592838192563,22.335700243173445],[114.26576792352287,22.335899756704844],
    [114.2659434024688,22.33601356032586]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume149);//A8-1部分1

companyID = 150, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume150 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26571323209114,22.33630537072319],[114.26586552651999,22.33608708434325],
    [114.2657964932825,22.336041842464258],[114.26563581528266,22.33626185428911],
    [114.26571323209114,22.33630537072319]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume150);//A9-4部分2

companyID = 151, floorNumber = 1, first_floor = 1, b_bottom =  42.89200018449128, b_top = 47.8
let volume151 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26657937392223,22.336423024627823],[114.2667654073084,22.336193798955644],
    [114.26655678252466,22.336058509044456],[114.26636333880151,22.336306045228124],
    [114.26657937392223,22.336423024627823]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume151);//A5-5部分1

companyID = 152, floorNumber = 1, first_floor = 1, b_bottom =  29.884, b_top = 34.488
let volume152 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2674735597808,22.336607992510928],[114.26761167496103,22.33642769493218],
    [114.26734677796152,22.336252762495818],[114.26722095726045,22.33642443851466],
    [114.2674735597808,22.336607992510928]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume152);//A1-2half1

companyID = 153, floorNumber = 1, first_floor = 1, b_bottom =  25.3, b_top = 30.32346915291753
let volume153 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26751967513592,22.337105745744598],[114.26767992101931,22.33686139531447],
    [114.26715646154256,22.336502730149537],[114.26696384349623,22.336735494665348],
    [114.26751967513592,22.337105745744598]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume153);//A2-1

companyID = 154, floorNumber = 1, first_floor = 1, b_bottom =  29.884, b_top = 34.488
let volume154 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26775331816333,22.33677301515213],[114.267883998294,22.33659545196779],
    [114.26761476866204,22.33642627332909],[114.26744654377832,22.336585729415756],
    [114.26775331816333,22.33677301515213]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume154);//A1-2half2

companyID = 155, floorNumber = 1, first_floor = 1, b_bottom =  42.82625102769284, b_top = 46.535803348869266
let volume155 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26773195857784,22.336763188491812],[114.26786984359364,22.336590649048514],
    [114.26767798061603,22.336463053864804],[114.26753637942996,22.33664494318431],
    [114.26773195857784,22.336763188491812]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume155);//A1-5部分

companyID = 156, floorNumber = 1, first_floor = 1, b_bottom =  39.33336597136787, b_top = 42.89031650771062
let volume156 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26668092167239,22.336481116556122],[114.26686629051721,22.33623388848295],
    [114.26677778316645,22.33617443970786],[114.26658044527986,22.33641479905777],
    [114.26668092167239,22.336481116556122]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume156);//A5-4部分3

companyID = 157, floorNumber = 1, first_floor = 1, b_bottom =  39.33336597136787, b_top = 42.89031650771062
let volume157 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26673480633382,22.33654709585955],[114.26691834857601,22.336306624397288],
    [114.26684272019241,22.33625176906397],[114.26667098267956,22.33648113326727],
    [114.26673480633382,22.33654709585955]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume157);//A5-4部分4

companyID = 158, floorNumber = 1, first_floor = 1, b_bottom =  31.13653061561608, b_top = 35.149848560062225
let volume158 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26668092167239,22.336481116556122],[114.26686629051721,22.33623388848295],
    [114.26677778316645,22.33617443970786],[114.26658044527986,22.33641479905777],
    [114.26668092167239,22.336481116556122]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume158);//A5-2部分3

companyID = 159, floorNumber = 1, first_floor = 1, b_bottom = 26, b_top =  31.138775785451788
let volume159 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26611238852593,22.336123380144894],[114.2662637286384,22.33592305137608],
    [114.26610696970923,22.335817478656455],[114.26594579253045,22.33601244246137],
    [114.26611238852593,22.336123380144894]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume159);//A8-1部分2

companyID = 160, floorNumber = 1, first_floor = 1, b_bottom = 26.3, b_top = 31.316408220041996
let volume160 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26599750914673,22.336503581290177],[114.26616566324458,22.336274502691523],
    [114.26573420024786,22.335989525199558],[114.26554102480166,22.336206224716243],
    [114.26599750914673,22.336503581290177]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume160);//A9-1

companyID = 161, floorNumber = 1, first_floor = 1, b_bottom =  39.33336597136787, b_top = 42.89031650771062
let volume161 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26681685183071,22.3365878176611],[114.26698739025183,22.336347687333888],
    [114.26690640709623,22.336299905907232],[114.26673212011686,22.336529461726943],
    [114.26681685183071,22.3365878176611]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume161);//A5-4部分5

companyID = 162, floorNumber = 1, first_floor = 1, b_bottom =  30.32346915291753, b_top = 34.240382849790876
let volume162 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26731939814881,22.336977260134873],[114.2675043442549,22.33673560311265],
    [114.26733974002659,22.33663061001284],[114.2671511544065,22.336854883193556],
    [114.26731939814881,22.336977260134873]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume162);//A2-2部分2

companyID = 163, floorNumber = 1, first_floor = 1, b_bottom =  26.3, b_top = 31.13653061561608
let volume163 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26690911258852,22.33662623501975],[114.26708213692781,22.336396347656834],
    [114.26656793901572,22.336049670079248],[114.2663902317262,22.336272960749632],
    [114.26690911258852,22.33662623501975]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume163);//A5-1

companyID = 164, floorNumber = 1, first_floor = 1, b_bottom = 39.33336597136787, b_top = 42.89031650771062
let volume164 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26742471382308,22.337042823399464],[114.26759672918774,22.33680555159722],
    [114.26768428950416,22.33686392744833],[114.26749691144526,22.337090427123073],
    [114.26742471382308,22.337042823399464]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume164);//A2-4部分4

companyID = 165, floorNumber = 1, first_floor = 1, b_bottom = 44.0443, b_top = 48.3
let volume165 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26578232715278, 22.335898750889033],
    [114.26592851587428, 22.33570762339634],
    [114.26639494058645, 22.336013949137794],
    [114.26625131033978, 22.33620585695213],
    [114.26578232715278, 22.335898750889033]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume165);//A8-5

companyID = 166, floorNumber = 1, first_floor = 1, b_bottom = 34.88066258276481, b_top = 39.309160071781655
let volume166 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26715286632714,22.33632738009978],[114.26729827894137,22.33614348659754],
    [114.26676808473478,22.335784593499938],[114.2666216336789,22.335964155674283],
    [114.26715286632714,22.33632738009978]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume166);//A6-3

companyID = 167, floorNumber = 1, first_floor = 1, b_bottom = 38.287641074096456, b_top = 42.82640437746003
let volume167 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26725086623127,22.33693586852105],[114.26743906579095,22.336691205327377],
    [114.26750659205965,22.33674114952093],[114.26732306735903,22.33698905866979],
    [114.26725086623127,22.33693586852105]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume167);//A2-4部分5

companyID = 168, floorNumber = 1, first_floor = 1, b_bottom = 43.23947930270607, b_top = 47.6
let volume168 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26715286632714,22.33632738009978],[114.26729827894137,22.33614348659754],
    [114.26676808473478,22.335784593499938],[114.2666216336789,22.335964155674283],
    [114.26715286632714,22.33632738009978]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume168);//A6-5

companyID = 169, floorNumber = 1, first_floor = 1, b_bottom =  42.89200018449128, b_top = 47.8
let volume169 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26676406342985,22.33654553573246],[114.26693586003734,22.336308173260907],
    [114.26676954402087,22.3361841645615],[114.26658206320374,22.33641554369164],
    [114.26676406342985,22.33654553573246]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume169);//A5-5部分2

companyID = 170, floorNumber = 1, first_floor = 1, b_bottom =  30.32346915291753, b_top = 34.240382849790876
let volume170 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26749008072798,22.337089689607694],[114.26768402846113,22.336858386747057],
    [114.26750844930797,22.33673698034253],[114.26732606522559,22.33697803244087],
    [114.26749008072798,22.337089689607694]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume170);//A2-2部分3

companyID = 171, floorNumber = 1, first_floor = 1, b_bottom =  b_bottom = 42.82640437746003, b_top = 47
let volume171 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26731439573669,22.336992280126676],[114.26750498911542,22.336742002482712],
    [114.26734255232616,22.336630021861428],[114.26714089055558,22.336880614981713],
    [114.26731439573669,22.336992280126676]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume171);//A2-5部分2

companyID = 172, floorNumber = 1, first_floor = 1, b_bottom =  39.33336597136787, b_top = 42.89031650771062
let volume172 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26689377191872,22.33663861956115],[114.26707456641222,22.336410802732683],
    [114.266986519648,22.336350234175764],[114.26681767363813,22.336590221227787],
    [114.26689377191872,22.33663861956115]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume172);//A5-4部分5

companyID = 173, floorNumber = 1, first_floor = 1, b_bottom = 38.287641074096456, b_top = 42.82640437746003
let volume173 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26713187406969,22.336861069431425],[114.26733506133178,22.336634317810905],
    [114.26726633270948,22.336585514005975],[114.26707465567345,22.336810040316834],
    [114.26713187406969,22.336861069431425]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume173);//A2-4部分6

companyID = 174, floorNumber = 1, first_floor = 1, b_bottom =  39.33336597136787, b_top = 42.89031650771062
let volume174 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26646988343704,22.33633474987898],[114.266665272299,22.336114673706525],
    [114.26660635304326,22.33607586522179],[114.26640968281805,22.336329645596628],
    [114.26646988343704,22.33633474987898]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume174);//A5-4部分6

companyID = 175, floorNumber = 1, first_floor = 1, b_bottom =  42.89200018449128, b_top = 47.8
let volume175 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26690126627143,22.336636925650634],[114.26707974129688,22.33640641810132],
    [114.26692753815942,22.336304532531738],[114.26674604182868,22.336552813315116],
    [114.26690126627143,22.336636925650634]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume175);//A5-5部分3

companyID = 176, floorNumber = 1, first_floor = 1, b_bottom = 35.197767206084464, b_top = 39.33336597136787
let volume176 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26599750914673,22.336503581290177],[114.26616566324458,22.336274502691523],
    [114.26573420024786,22.335989525199558],[114.26554102480166,22.336206224716243],
    [114.26599750914673,22.336503581290177]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume176);//A9-3

companyID = 177, floorNumber = 1, first_floor = 1, b_bottom = 36.130505335721374, b_top = 40.2376084108883
let volume177 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2656756037001, 22.33841428653115],
    [114.26580130709716, 22.338245636323986],
    [114.26633622076992, 22.338588825234016],
    [114.26619199427859, 22.338777482862124],
    [114.2656756037001, 22.33841428653115]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume177);//A80-3

companyID = 178, floorNumber = 1, first_floor = 1, b_bottom = 44.61317372769474, b_top = 48.69489697993874
let volume178 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26566544078045,22.338415094375623],[114.26594615530445,22.338603647991672],
    [114.2660974295908,22.338432610387073],[114.26580014273422,22.338244864948265],
    [114.26566544078045,22.338415094375623]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume178);//A80-5部分1

companyID = 179, floorNumber = 1, first_floor = 1, b_bottom = 44.61317372769474, b_top = 48.69489697993874
let volume179 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26593931070173,22.33860370693816],[114.26618901138416,22.338777198688902],
    [114.26633060515502,22.338589849722098],[114.26609826404993,22.33843081494338],
    [114.26593931070173,22.33860370693816]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume179);//A80-5部分2

companyID = 180, floorNumber = 1, first_floor = 1, b_bottom = 25.986552288178718, b_top = 29.97458949037573
let volume180 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26780458609352,22.339050739656795],[114.26789474221505,22.338947248594167],
    [114.26767942693535,22.33880571807678],[114.26759727661452,22.338908703182398],
    [114.26780458609352,22.339050739656795]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume180);//A109-1部分1

companyID = 181, floorNumber = 1, first_floor = 1, b_bottom = 25.986552288178718, b_top = 29.97458949037573
let volume181 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26791257408371,22.33912327337569],[114.26799411549956,22.339024181590865],
    [114.26789623383065,22.33894984185779],[114.26780576086759,22.339049621272785],
    [114.26791257408371,22.33912327337569]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume181);//A109-1部分2

//2023到期 共6家

// companyID = 182, floorNumber = 1, first_floor = 1, b_bottom = 25.986552288178718, b_top = 29.97458949037573
// let volume182 = {
//   color: 0xCCFFFF,
//   opacity: 0.4,
//   points: [
//     []
//   ].map(function (lnglat) {
//     return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
//   }),

// }
// floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume182);//深圳市六南能源有限公司横岗排榜供应站 3栋临建

companyID = 183, floorNumber = 1, first_floor = 1, b_bottom = 25.986552288178718, b_top = 30.4
let volume183 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26470610658286,22.340000983545707],[114.26484957753345,22.339818831146818],
    [114.26444472563195,22.339562843433885],[114.26430725703824,22.339725472182778],
    [114.26470610658286,22.340000983545707]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume183);//A80-1

//第二批 2109年到期 2家

companyID = 184, floorNumber = 1, first_floor = 1, b_bottom = 33.77303813399492, b_top = 37.03908223942128
let volume184 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2652597354964, 22.338750511316483],
    [114.26595838531767, 22.339188879496863],
    [114.26579578309911, 22.339398528859345],
    [114.26511122313424, 22.338947533968064],
    [114.2652597354964, 22.338750511316483]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume184);//A208-2

//第二批 2020到期 12家

companyID = 185, floorNumber = 1, first_floor = 1, b_bottom =38.424, b_top = 60.6
let volume185 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26470393875123,22.33999856275048],[114.26485290311163,22.339817801321942],
    [114.26445633882193,22.339558343893778],[114.26432108082366,22.33971690832822],
    [114.26470393875123,22.33999856275048]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume185);//A203一半

companyID = 186, floorNumber = 1, first_floor = 1, b_bottom =29.5, b_top = 54.4
let volume186 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26686142106766,22.34017309389543],[114.26697749421729,22.340019245734],
    [114.26657358559048,22.339744769294807],[114.2664474608255,22.339897565368947],
    [114.26686142106766,22.34017309389543]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume186);//A154

companyID = 187, floorNumber = 1, first_floor = 1, b_bottom =28.5, b_top = 34.11031568191798
let volume187 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26592907059441,22.33985919656889],[114.26611321966008,22.33963753138939],
    [114.26595588156805,22.339532932425808],[114.26577003907697,22.339745459560827],
    [114.26592907059441,22.33985919656889]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume187);//A163-1部分1

companyID = 188, floorNumber = 1, first_floor = 1, b_bottom =28.5, b_top = 33.30331889348603
let volume188 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26555866965894,22.339650242838605],[114.26570496615099,22.33946810793201],
    [114.26505674017166,22.33904437834162],[114.26491906448342,22.339218070085437],
    [114.26555866965894,22.339650242838605]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume188);//A206-1

companyID = 189, floorNumber = 1, first_floor = 1, b_bottom =33.30331889348603, b_top = 37.257645885793316
let volume189 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26555866965894,22.339650242838605],[114.26570496615099,22.33946810793201],
    [114.26505674017166,22.33904437834162],[114.26491906448342,22.339218070085437],
    [114.26555866965894,22.339650242838605]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume189);//A206-2

companyID = 190, floorNumber = 1, first_floor = 1, b_bottom =33, b_top = 58.65
let volume190 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26566168800113,22.34064233438838],[114.26582976645834,22.340454565865713],
    [114.26543329218755,22.340201530712086],[114.26529626604665,22.340367316410656],
    [114.26566168800113,22.34064233438838]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume190);//A165一半2

companyID = 191, floorNumber = 1, first_floor = 1, b_bottom =35.55458335267568, b_top = 39.62898003841951
let volume191 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2669991055649,22.34090020483263],[114.26698687573166,22.34072613740834],
    [114.26683951595533,22.34074373124301],[114.26684392563973,22.340900004053026],
    [114.2669991055649,22.34090020483263]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume191);//A147-2一半1

companyID = 192, floorNumber = 1, first_floor = 1, b_bottom =35.55458335267568, b_top = 39.62898003841951
let volume192 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26717666440518,22.340883626380567],[114.2671703730453,22.34072329732529],
    [114.26699054114923,22.340726157589927],[114.2670007966949,22.34089717615191],
    [114.26717666440518,22.340883626380567]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume192);//A147-2一半2

companyID = 193, floorNumber = 1, first_floor = 1, b_bottom =39.62898003841951, b_top = 43.513461598516386
let volume193 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26718115069723,22.340876399477292],[114.26717570005327,22.34072440797092],
    [114.26684124918098,22.340745286200203],[114.26685020414196,22.34090733214043],
    [114.26718115069723,22.340876399477292]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume193);//A147-3

companyID = 194, floorNumber = 1, first_floor = 1, b_bottom =47.28253410433937, b_top = 51.65107948422293
let volume194 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2677420920851,22.340887806289324],[114.26774746536131,22.340730339505658],
    [114.26737647518645,22.34072731421555],[114.26737110482614,22.34087918225112],
    [114.2677420920851,22.340887806289324]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume194);//A144-5

companyID = 195, floorNumber = 1, first_floor = 1, b_bottom =35.21473099329697, b_top = 39.20867884279174
let volume195 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2677420920851,22.340887806289324],[114.26774746536131,22.340730339505658],
    [114.26737647518645,22.34072731421555],[114.26737110482614,22.34087918225112],
    [114.2677420920851,22.340887806289324]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume195);//A144-2

//第二批 2021到期 4家

companyID = 196, floorNumber = 1, first_floor = 1, b_bottom = 37.257645885793316, b_top = 41.39988264047225
let volume196 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26555866965894,22.339650242838605],[114.26570496615099,22.33946810793201],
    [114.26505674017166,22.33904437834162],[114.26491906448342,22.339218070085437],
    [114.26555866965894,22.339650242838605]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume196);//A206-3

companyID = 197, floorNumber = 1, first_floor = 1, b_bottom = 45.75189363463947, b_top = 50.7
let volume197 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2652597354964, 22.338750511316483],
    [114.26595838531767, 22.339188879496863],
    [114.26579578309911, 22.339398528859345],
    [114.26511122313424, 22.338947533968064],
    [114.2652597354964, 22.338750511316483]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume197);//A208-5

//第二批 2022到期 16家

companyID = 198, floorNumber = 1, first_floor = 1, b_bottom = 30.4, b_top = 58.5
let volume198 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2654215931582,22.339866756081246],[114.26555069023847,22.339707640093714],
    [114.26517298740796,22.33945466341338],[114.26501211811303,22.339615938224767],
    [114.2654215931582,22.339866756081246]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume198);//A201一半2

companyID = 199, floorNumber = 1, first_floor = 1, b_bottom = 38.44950685608476, b_top = 43.07867765122672
let volume199 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2662465003636,22.34005905532726],[114.26641422333049,22.339841154787813],
    [114.26595181255772,22.33953273762172],[114.26578053728134,22.339749192707927],
    [114.2662465003636,22.34005905532726]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume199);//A163-3

companyID = 200, floorNumber = 1, first_floor = 1, b_bottom =28.5, b_top = 34.11031568191798
let volume200 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26609683588241,22.33996672625908],[114.26627134279912,22.339751363190377],
    [114.26611170747046,22.339639799842068],[114.26593171586018,22.339854226319865],
    [114.26609683588241,22.33996672625908]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume200);//A163-1部分2

companyID = 201, floorNumber = 1, first_floor = 1, b_bottom = 34.11031568191798, b_top = 38.44950685608476
let volume201 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2662465003636,22.34005905532726],[114.26641422333049,22.339841154787813],
    [114.26595181255772,22.33953273762172],[114.26578053728134,22.339749192707927],
    [114.2662465003636,22.34005905532726]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume201);//A163-2

companyID = 202, floorNumber = 1, first_floor = 1, b_bottom =28.5, b_top = 34.11031568191798
let volume202 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2662412159901,22.340058746413717],[114.26640986181084,22.33984096842214],
    [114.26627123496888,22.33975221968549],[114.26609834173217,22.33996476329369],
    [114.2662412159901,22.340058746413717]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume202);//A163-1部分3

companyID = 203, floorNumber = 1, first_floor = 1, b_bottom =45.43505908009615, b_top = 50.732590637152896
let volume203 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26505838113984,22.339311224521175],[114.26520961836358,22.339146832423],
    [114.26505326087783,22.339047172039667],[114.26491310980118,22.339214945308314],
    [114.26505838113984,22.339311224521175]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume203);//A206-5部分1

companyID = 204, floorNumber = 1, first_floor = 1, b_bottom =45.43505908009615, b_top = 50.732590637152896
let volume204 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26523552376212,22.33943600745674],[114.26537163650093,22.339261063125456],
    [114.26520719279273,22.339150922097737],[114.26507110501149,22.339324627769177],
    [114.26523552376212,22.33943600745674]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume204);//A206-5部分2

companyID = 205, floorNumber = 1, first_floor = 1, b_bottom =45.43505908009615, b_top = 50.732590637152896
let volume205 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26539912339419,22.339545461065644],[114.26553429860579,22.33936641370184],
    [114.26538799775611,22.339263667674615],[114.26524459014617,22.339453925856837],
    [114.26539912339419,22.339545461065644]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume205);//A206-5部分3

companyID = 206, floorNumber = 1, first_floor = 1, b_bottom = 38.590587420825834, b_top = 48.606088108376895
let volume206 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2664089705112,22.340525649370992],[114.26651518444872,22.340363053722175],
    [114.26612055509173,22.34007638347153],[114.26597563362688,22.34025566350733],
    [114.2664089705112,22.340525649370992]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume206);//A164-2,3half

companyID = 207, floorNumber = 1, first_floor = 1, b_bottom = 33.1040728055477, b_top = 38.590587420825834
let volume207 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2664089705112,22.340525649370992],[114.26651518444872,22.340363053722175],
    [114.26612055509173,22.34007638347153],[114.26597563362688,22.34025566350733],
    [114.2664089705112,22.340525649370992]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume207);//A164-1,4half

companyID = 208, floorNumber = 1, first_floor = 1, b_bottom = 38.590587420825834, b_top = 52.944941143789
let volume208 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2664089705112,22.340525649370992],[114.26651518444872,22.340363053722175],
    [114.26612055509173,22.34007638347153],[114.26597563362688,22.34025566350733],
    [114.2664089705112,22.340525649370992]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume208);//A164-1,4half

companyID = 209, floorNumber = 1, first_floor = 1, b_bottom = 52.944941143789, b_top = 57.42119722553055
let volume209 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2664089705112,22.340525649370992],[114.26651518444872,22.340363053722175],
    [114.26612055509173,22.34007638347153],[114.26597563362688,22.34025566350733],
    [114.2664089705112,22.340525649370992]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume209);//A164-5half

companyID = 210, floorNumber = 1, first_floor = 1, b_bottom = 39.20867884279174, b_top = 43.50881140187933
let volume210 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2677420920851,22.340887806289324],[114.26774746536131,22.340730339505658],
    [114.26737647518645,22.34072731421555],[114.26737110482614,22.34087918225112],
    [114.2677420920851,22.340887806289324]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume210);//A144-3

companyID = 211, floorNumber = 1, first_floor = 1, b_bottom = 43.50881140187933, b_top = 47.28253410433937
let volume211 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2677420920851,22.340887806289324],[114.26774746536131,22.340730339505658],
    [114.26737647518645,22.34072731421555],[114.26737110482614,22.34087918225112],
    [114.2677420920851,22.340887806289324]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume211);//A144-4

companyID = 212, floorNumber = 1, first_floor = 1, b_bottom = 30.794671476405327, b_top = 35.21473099329697
let volume212 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2677420920851,22.340887806289324],[114.26774746536131,22.340730339505658],
    [114.26737647518645,22.34072731421555],[114.26737110482614,22.34087918225112],
    [114.2677420920851,22.340887806289324]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume212);//A144-1

//第二批 2023到期 8家

companyID = 213, floorNumber = 1, first_floor = 1, b_bottom = 43.07867765122672, b_top = 47.97034078404141
let volume213 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26602444852004,22.339924685904354],[114.26620030394483,22.339693122945565],
    [114.26595056285647,22.33952953945284],[114.26577633073795,22.3397502000479],
    [114.26602444852004,22.339924685904354]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume213);//A163-4half1

companyID = 214, floorNumber = 1, first_floor = 1, b_bottom = 43.07867765122672, b_top = 47.97034078404141
let volume214 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26624737982965,22.34005565217062],[114.26640754293462,22.33983793515042],
    [114.26620056470288,22.339693137190118],[114.26602126713264,22.339933765052795],
    [114.26624737982965,22.34005565217062]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume214);//A163-4half2

companyID = 215, floorNumber = 1, first_floor = 1, b_bottom =45.43505908009615, b_top = 50.732590637152896
let volume215 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26556512256144,22.339641218210055],[114.26570355252541,22.339466997307053],
    [114.26553770801426,22.339362291134],[114.26540712745295,22.339544610414748],
    [114.26556512256144,22.339641218210055]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume215);//A206-5部分4

companyID = 216, floorNumber = 1, first_floor = 1, b_bottom = 28.202657702404775, b_top = 33.77303813399492
let volume216 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.2652597354964, 22.338750511316483],
    [114.26595838531767, 22.339188879496863],
    [114.26579578309911, 22.339398528859345],
    [114.26511122313424, 22.338947533968064],
    [114.2652597354964, 22.338750511316483]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume216);//A208-1

companyID = 217, floorNumber = 1, first_floor = 1, b_bottom = 43.513461598516386, b_top = 47.38141431417613
let volume217 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26718115069723,22.340876399477292],[114.26717570005327,22.34072440797092],
    [114.26684124918098,22.340745286200203],[114.26685020414196,22.34090733214043],
    [114.26718115069723,22.340876399477292]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume217);//A147-4

companyID = 218, floorNumber = 1, first_floor = 1, b_bottom = 30.588653606880634, b_top = 35.55458335267568
let volume218 = {
  color: 0xCCFFFF,
  opacity: 0.4,
  points: [
    [114.26718115069723,22.340876399477292],[114.26717570005327,22.34072440797092],
    [114.26684124918098,22.340745286200203],[114.26685020414196,22.34090733214043],
    [114.26718115069723,22.340876399477292]
  ].map(function (lnglat) {
    return new altizure.LngLatAlt(lnglat[0], lnglat[1], 0)
  }),

}
floorDistinguish(companyID, floorNumber, first_floor, b_bottom, b_top, volume218);//A147-1

//第二批 彩丽 2
//彩丽电子（深圳）有限公司录入过
//深圳市宠达商贸 没有楼层信息



















