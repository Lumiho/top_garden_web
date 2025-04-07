// Example usage
// const estimator = new EstimateCost();
// console.log(estimator.calculation({ area: 100, irrigation: true, mulch: false, sod: true, turf: false, cleanup: true }));
// Output: 700
class EstimateCost {
  Calculation({ area, mulch, turf_or_sod, turf_irrigation, cleanup, budget, projectName }) {
    let cost = 0;
    // sod/turf have no irrigation option
    if (turf_irrigation) {
      cost += 4.25 * area;
    } else if (turf_or_sod) { //no irrigation
      cost += 2 * area;
    }
    if (mulch) cost += 5 * area;
    if (cleanup) cost += 5 * area;
    return cost;
  }
}

export const estimator = new EstimateCost();