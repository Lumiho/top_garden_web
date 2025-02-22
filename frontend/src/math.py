# class to calculate cost
# Usage: 
    # estimator = EstimateCost()
    # total_cost = estimator.calculation(area=100, irrigation=True, mulch=False, sod=True, turf=False, cleanup=True)
    # print(total_cost)  # Expected output: 2*100 + 5*100 = 700

class estimateCost():
    def calculation(self, area, irrigation, mulch, sod, turf, cleanup):
        cost = 0
        # sod/turf have no irrigation option
        if sod or turf or not irrigation: cost += 2*area
        elif irrigation: cost += 4.25*area
        
        if mulch: cost += 5*area
        if cleanup: cost += 5*area
        
        return cost
        
    
