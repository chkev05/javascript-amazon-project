import {formatCurrency} from "../../scripts/utils/money";

if (formatCurrency(2095) === '20.95') {
    console.log("test 1 passed");
}
else {
    console.log("test 1 failed");
}

if (formatCurrency(0) === '0.00') {
    console.log("test 2 passed");
}
else {
    console.log("test 2 failed");
}
