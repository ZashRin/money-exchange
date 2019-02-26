// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let a = {};
    if (currency > 10000) {
        a.error = "You are rich, my friend! We don't have so much coins for exchange";
        return a;
    }
    if(currency <= 0) return a;
    let hs = 50, qs = 25, ds = 10, ns = 5, ps = 1;
    let H = 0, Q = 0, D = 0, N = 0, P = 0; 
    while(currency >= hs) {
        currency -= hs;
        H++;
        if(H > 0 ) a['H'] = H;
    }
    while(currency >= qs) {
        currency -= qs;
        Q++;
        if(Q > 0 ) a['Q'] = Q;
    }
    while(currency >= ds) {
        currency -= ds;
        D++;
        if(D > 0 ) a['D'] = D;
    }
    while(currency >= ns) {
        currency -= ns;
        N++;
        if(N > 0 ) a['N'] = N;
    }
    while(currency >= ps) {
        currency -= ps;
        P++;
        if(P > 0 ) a['P'] = P;
    }
    return a;
}
