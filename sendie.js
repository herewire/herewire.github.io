
function rld() {
    location.reload();
}
function reset() {
   localStorage.clear();
}
function rstamts() {
localStorage.expbasic=0;
localStorage.incbasic=0;
}
function incsetup() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.incbasic) {
            localStorage.incbasic = Number(localStorage.incbasic)+10;
        } else {
            localStorage.incbasic = 0;
        }
        document.getElementById("incamt").innerHTML = localStorage.incbasic;
    } else {
        document.getElementById("incamt").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function incsetdwn() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.incbasic) {
            localStorage.incbasic = Number(localStorage.incbasic)-1;
        } else {
            localStorage.incbasic = 0;
        }
        document.getElementById("incamt").innerHTML = localStorage.incbasic;
    } else {
        document.getElementById("incamt").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
var month = new Array();var i = 0;month[0] = "google.com";month[1] = "etsy.com";month[2] = "amazon.com";month[3] = "target.com";month[4] = "weather.gov";
function inet() {
document.getElementById("adlnk").innerHTML = month[i++%month.length];
var http = "http://";
document.getElementById("adlnk").href = http + document.getElementById("adlnk").innerHTML;
}
 var cgyinc = new Array();var i = 0;cgyinc[0] = "01 Gross receipts or sales";cgyinc[1] = "02 Returns and allowances(entr as - nbr)";cgyinc[2] = "04 Cost of goods sold(entr as - nbr)";cgyinc[3] = "06 Other income including federal and state gasoline or fuel tax credit or refund";
 
 function icgy(){
document.getElementById("txcgy").innerHTML = cgyinc[i++%cgyinc.length];
}
 
 
 
  var cgyexp = new Array();var i = 0;cgyexp[0] = "08 Advertising";cgyexp[1] = "09 Car and truck expenses";cgyexp[2] = "10 Commissions and fees";cgyexp[3] = "11 Contract Labor";cgyexp[4] = "12 Depletion";cgyexp[5] = "13 Depreciation and Sect179 expense ddtn";cgyexp[6] = "14 Employee Benefit Programs";cgyexp[7] = "15 Insurance(other than health)";cgyexp[8] = "16a Interest(Mortgage(paid to banks))";cgyexp[9] = "16b Interest(Other)";  cgyexp[10] = "17 Legal and Professional Svcs";cgyexp[11] = "18 Office exp";cgyexp[12] = "19 Pension and profit-sharing plans";cgyexp[13] = "20a Rent or lease(Veh mchnry equp)";cgyexp[14] = "20b Rent or lease(Other Bus Pprty)";cgyexp[15] = "21 Repairs and maintenance";cgyexp[16] = "22 Supplies(not incl in COGS)";cgyexp[17] = "23 Taxes and Licenses";cgyexp[18] = "24a Travel Meals and Ent(Travel)";cgyexp[19] = "24b Travel Meals and Ent(Ddtbl Meals and Ent)";cgyexp[20] = "25 Utilities";cgyexp[21] = "26 Wages(less emplymnt crdts)";cgyexp[22] = "27a Other(fm Ln48)";cgyexp[23] = "28 SEP IRA QulfdPln Cntrbtn";cgyexp[24] = "29 HLTH INS (Self)";cgyexp[25] = "30 HOME business exp";
 
  function ecgy(){
document.getElementById("txcgyexp").innerHTML = cgyexp[i++%cgyexp.length];
}
 
 var cgyie = new Array();var i = 0;cgyie[0] = "01_Gross_receipts_or_sales";cgyie[1] = "02_Returns_and_allowances";cgyie[2] = "04_Cost_of_Goods_Sold(frm_PartIII)";cgyie[3] = "06_Other_income_including_federal_and_state_gasoline_or_fuel_tax_credit_or_refund";cgyie[4] = "08_Advertising";cgyie[5] = "09_Car_and_truck_expenses";cgyie[6] = "10_Commissions_and_fees";cgyie[7] = "11_Contract_Labor";cgyie[8] = "12_Depletion";cgyie[9] = "13_Depreciation_and_Sect179_expense_ddtn";cgyie[10] = "14_Employee_Benefit_Programs";cgyie[11] = "15_Insurance(other_than_HlthIns)";cgyie[12] = "16a_Interest(Mortgage(paid_to_banks))";cgyie[13] = "16b_Interest(Other)";cgyie[14] = "17_Legal_and_Professional_Svcs";cgyie[15] = "18_Office_exp";cgyie[16] = "19_Pension_and_profit-sharing_plans";cgyie[17] = "20a_Rent_or_lease(Veh_mchnry_equp)";cgyie[18] = "20b_Rent_or_lease(Other_Bus_Pprty)";cgyie[19] = "21_Repairs_and_maintenance";cgyie[20] = "22_Supplies(not_incld_in_COGS)";cgyie[21] = "23_Taxes_and_Licenses";cgyie[22] = "24a_Travel_Meals_and_Ent(Travel)";cgyie[23] = "24b_Travel_Meals_and_Ent(Ddtbl_Meals_and_Ent)";cgyie[24] = "25_Utilities";cgyie[25] = "26_Wages(less_emplymnt_crdts)";cgyie[26] = "27a_Other(fm_Ln48)";cgyie[27] = "30_HOME_business_exp";cgyie[28] = "35(COGS)Inventory_Beg_of_YR";cgyie[29] = "36(COGS)Purch_less_cost_of_items_used_for_personal_use";cgyie[30] = "37(COGS)Cost_of_Labor";cgyie[31] = "38(COGS)Materials_and_Spplys";cgyie[32] = "39(COGS)Other_costs";cgyie[33] = "41(COGS)Inventory_End_of_YR";cgyie[34] = "44a_Vehicle_Business_Miles";cgyie[35] = "44b_Vehicle_Commuting_Miles";cgyie[36] = "44c_Vehicle_Other_Miles";cgyie[37] = "1040_Ln27_Ddtbl_part_of_Self-Employment_tax(Attch_Sch-SE)";cgyie[38] = "1040_Ln28_SEP_IRA_QulfdPln_Cntrbtn";cgyie[39] = "1040_Ln29_HLTH_INS_(Self)"; 
 
 function iecgy(){
document.getElementById("txcgyie").innerHTML = cgyie[i++%cgyie.length];
}

function cpyscn(){
document.getElementById("scnngnow").innerHTML = "cpy sys scnng";
}

function mailamttwt(){
var amt = document.getElementById("incamt").innerHTML;
var dte = Date();
var dtnw = Date.now();
var cgy = document.getElementById("txcgyie").innerHTML;
window.location.href = "https://twitter.com/intent/tweet?text="+cgy+"~"+amt+"~DATE"+dtnw+"";
}
function mail() {
var inc = document.getElementById("incamt").innerHTML;
var cgydtli = document.getElementById("txcgyie").innerHTML;
var emldtnw = Date.now();
window.location.href = "mailto:i@i.i?subject="+cgydtli+"~"+inc+"~DATE"+emldtnw+"&body="+cgydtli+"~"+inc+"~DATE"+emldtnw+"";
}
