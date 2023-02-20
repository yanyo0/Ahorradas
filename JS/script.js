const $ = (elem) => document.querySelector(elem)
const $$ = (elem) => document.querySelectorAll(elem)

let operations = []

let category = [{ id: 1,
              title: "Comida"
            }, 
            { id: 2 ,
              title: "Servicios",
             },
            {
             id: 3,
             title: "Salidas",
             },
             { id: 4 ,
               title: "Educación",
              },
            { id: 5,
              title : "Transporte",
             },
             { id: 6,
               title: "Trabajo"}]


             

window.addEventListener('load', () => { 

    if(JSON.parse(localStorage.getItem("operations"))) {
      operations =  JSON.parse(localStorage.getItem("operations"))
    }
    if(JSON.parse(localStorage.getItem("category"))) {
        category = JSON.parse(localStorage.getItem("category"))
    }

    

// ---------   VARIABLES  --------- 

// --  NAV ---

const $menuBars = $(".menuBars")
const $lineIconBars = $("#lineIconBars")
const $xIconBars = $("#xIconBars")
const $contentMenuBars = $("#contentMenuBars")
const $btnBalanceSheetsNav = $("#btnBalanceSheetsNav")
const $btnCategoriesNav = $("#btnCategoriesNav")
const $btnRecords = $("#btnRecords")
const $btnMenuBarsBalanceSheets = $("#btnMenuBarsBalanceSheets")
const $btnMenuBarsCategories = $("#btnMenuBarsCategories")
const $btnMenuBarsRecords = $("#btnMenuBarsRecords")



// -- BALANCES -- 

const $balanceSheets = $("#balanceSheets");
const $btnNewO = $("#btnNewO");
const $boxOperations = $("#boxOperations");
const $earningsBlance = $("#earningsBlance");
const $expenseBalance = $("#expenseBalance")
const $totalBalance =$("#totalBalance")

let positiveOperations, negativeOperations ,  sumPositiveOp, sumNegativeOp , total

// -Filter-

let filteredOut = [...operations]

const $hiddenFilter = $("#hiddenFilter")
const $showFilter = $("#showFilter")
const $itemsFilters = $("#itemsFilters")
const $filterType = $("#filterType")
const $filterCategory = $("#filterCategory")
const $filterDate = $("#filterDate")
const $filterOrder = $("#filterOrder")

let valuefilterType , valueFilterCategory, valueFilterDate, valueFilterOlder

// -- SECTION NEW OPERATION --

const $withoutResult = $("#withoutResult");
const $conatinerOperation = $("#conatinerOperation")
const $newOperation = $("#newOperation");
const $btnAddNewOperation = $("#btnAddNewOperation");
const $btnNewOperationCancel = $("#btnNewOperationCancel");
const $addDescription = $("#addDescription");
const $errorDescriptionOperation = $("#errorDescriptionOperation")
const $addAmount = $("#addAmount");
const $errorAmountOperation = $("#errorAmountOperation")
const $addType = $("#addType");
const $addCategoryNewOperation = $("#addCategoryNewOperation");
const $addDate = $("#addDate");
const $errorDateOperation = $("#errorDateOperation")

let valueDescription, valueAmount, valueType, valueCategory, valueDate


// -- SECTION EDIT OPERATION --

const $sectionEditOperation = $("#sectionEditOperation");
const $editDescriptionOperation = $("#editDescriptionOperation");
const $errorDescriptionEditOperation = $("#errorDescriptionEditOperation");
const $editAmountOperation = $("#editAmountOperation");
const $errorAmountEditOperation = $("#errorAmountEditOperation");
const $editTypeOperation = $("#editTypeOperation");
const $editCategoryOperation = $("#editCategoryOperation");
const $editDateOperation = $("#editDateOperation");
const $errorDateEditOperation = $("#errorDateEditOperation")
const $btnEditOperationCancel = $("#btnEditOperationCancel")
const $btnEditOperation = $("#btnEditOperation");

let valueEditDescriptionOperation , valueEditAmountOperation , valueEditTypeOperation , valueEditCategoryOperation , valueEditDateOperation




// --  CATEGORIAS  --

const $categories = $("#categories")
const $addNewCategory = $("#addNewCategory")
const $boxCategory = $("#boxCategory")
const $btnAddNewCategory = $("#btnAddNewCategory")
const $errorNameCategory = $("#errorNameCategory")
const $errorRepeatCategory = $("#errorRepeatCategory")


let select

// -Section Edit Category-

const $editNameCategory = $("#editNameCategory")
const $sectionEditCategory = $("#sectionEditCategory")
const $errorEditNameCategory = $("#errorEditNameCategory")
const $errorEditRepeatCategory = $("#errorEditRepeatCategory")
const $btnEditCategoryCancel = $("#btnEditCategoryCancel")
const $btnEditCategory = $("#btnEditCategory")



// -- REPORTES -- 

const $records = $("#records")
const $categoryHigherGainName = $("#categoryHigherGainName")
const $categoryHigherGainAmount = $("#categoryHigherGainAmount")
const $categoryHigherExpenseName = $("#categoryHigherExpenseName")
const $categoryHigherExpenseAmount = $("#categoryHigherExpenseAmount")
const $categoryMoreBalanceName = $("#categoryMoreBalanceName")
const $categoryMoreBalanceAmount = $("#categoryMoreBalanceAmount")
const $monthHigherGainDate = $("#monthHigherGainDate")
const $monthHigherGainAmount = $("#monthHigherGainAmount")
const $monthHigherExpenseDate = $("#monthHigherExpenseDate")
const $monthHigherExpenseAmount = $("#monthHigherExpenseAmount")
const $totalCategoryBox = $("#totalCategoryBox")
const $sumOperationMonthBox = $("#sumOperationMonthBox")


// ------------- FUNCTIONS ------------------------------

// --- GENERAL --- 

const sum = (array) => array.reduce( (x , y) => x + y.amount , 0)

const setLocalStorege = (key, array) => localStorage.setItem(key, JSON.stringify(array));

const tranformDate = (date) => {
   let year = date.slice(0,4)
   let month = date.slice(5,7)
   let day = date.slice(8,10)
   return `${day}-${month}-${year}`
}

const formatDate = (date) => {
    let day = date.slice(0,2)
    let month = date.slice(3,5)
    let year = date.slice(6,10)
    return `${year}-${month}-${day}`
}

const day = (date) => date.slice(0,2)
const month = (date) => date.slice(3,5)
const year = (date) => date.slice(6,10)



// --- NAV ---

const animateBars = () => {
 $lineIconBars.classList.toggle("hidden");
 $xIconBars.classList.toggle("hidden");
 $contentMenuBars.classList.toggle("hidden");
}

// -- BALANCES --


  

const sectionBalance = () => {
  positiveOperations =  operations.filter(elem => elem.type === "ganancia");
  negativeOperations = operations.filter(elem => elem.type === "gasto");
  
  sumPositiveOp = sum(positiveOperations)
  sumNegativeOp = sum(negativeOperations)
  total = sumPositiveOp - sumNegativeOp

  $earningsBlance.innerText = `$ ${sumPositiveOp}`
  $expenseBalance.innerText = `$ ${sumNegativeOp}`
  $totalBalance.innerText = `$ ${total}`
  if(total > 0){
    $totalBalance.classList.add("text-lime-600");
    $totalBalance.classList.remove("text-red-600");
  } else {
    $totalBalance.classList.remove("text-lime-600");
    $totalBalance.classList.add("text-red-600");
  }
}

// -- Filter--


const valueFilter = () => {
   valuefilterType = $filterType.value
   valueFilterCategory = $filterCategory.value
   valueFilterDate = $filterDate.value
   valueFilterOlder = $filterOrder.value
}




const filterTypeOperations = () => {

    if(valuefilterType === "expense") {
       filteredOut = operations.filter(elem => elem.type === "gasto");
       return filteredOut
    }else if(valuefilterType === "gain"){
        filteredOut = operations.filter(elem => elem.type === "ganancia");
        return filteredOut
    } else {
        filteredOut = [...operations]
        return filteredOut
    }
}

const filterCategoryOperations = (value) => {
    if(value !== "all" ) {
        filteredOut = filteredOut.filter(elem => elem.category === value )
    }
    
    return filteredOut

}




const filterDateOperations  = (valueDate) => {
    if(valueDate !== ""){
    filteredOut = filteredOut.filter(elem => Number(year(elem.date)) >= Number(year(tranformDate(valueDate))));
    filteredOut = filteredOut.filter(elem => Number(month(elem.date)) >= Number(month(tranformDate(valueDate))));
    filteredOut = filteredOut.filter(elem => Number(day(elem.date)) >= Number(day(tranformDate(valueDate))));
    }
    return filteredOut
}



const filterOrderOperation = (valueOrder) => {
    if(valueOrder === "mostRecent" ) {
        filteredOut = filteredOut.sort((a,b) => {
            if( formatDate(a.date) > formatDate(b.date)) {
              return -1
            }
            if(formatDate(a.date) < formatDate(b.date)){
              return 1
            }
            return 0
          })}
     else if(valueOrder === "lessRecent") {
        filteredOut = filteredOut.sort((a,b) => {
            if( formatDate(a.date) > formatDate(b.date)) {
              return 1
            }
            if(formatDate(a.date) < formatDate(b.date)){
              return -1
            }
            return 0
          })
   
        
    } else if(valueOrder === "mostAmount"){
        filteredOut = filteredOut.sort((a,b) => {
            if( a.amount > b.amount) {
              return -1
            }
            if(a.amount < b.amount){
              return 1
            }
            return 0
          })
    }
    
     else if(valueOrder === "lessAmount") {
        filteredOut = filteredOut.sort((a,b) => {
            if( a.amount > b.amount) {
              return 1
            }
            if(a.amount < b.amount){
              return -1
            }
            return 0
          })
    }else if(valueOrder === "AZ"){
        filteredOut = filteredOut.sort((a,b) => {
            if( a.description.toLowerCase() > b.description.toLowerCase()) {
              return 1
            }
            if(a.description.toLowerCase() < b.description.toLowerCase()){
              return -1
            }
            return 0
          })
    }else {
        filteredOut = filteredOut.sort((a,b) => {
            if( a.description.toLowerCase() > b.description.toLowerCase()) {
              return -1
            }
            if(a.description.toLowerCase() < b.description.toLowerCase()){
              return 1
            }
            return 0
          })
          
    }
    return filteredOut
}



const functionFilter = () => {
    valueFilter();
    filterTypeOperations();
    filterCategoryOperations(valueFilterCategory);
    filterDateOperations(valueFilterDate);
    filterOrderOperation(valueFilterOlder);
}

const functionFilterPaint = () => {
    if(filteredOut.length === 0 ){
        $withoutResult.classList.remove("hidden");
        $conatinerOperation.classList.add("hidden");
    } else {
        $withoutResult.classList.add("hidden");
        $conatinerOperation.classList.remove("hidden");
        paintOperation(filteredOut);
    }
    
}





// --NEW OPERATION --



const paintOperation = (array) => {
    $boxOperations.innerHTML = ""
    if(array.length === 0){
        $withoutResult.classList.remove("hidden");
        $conatinerOperation.classList.add("hidden");
    } else {
        $withoutResult.classList.add("hidden");
        $conatinerOperation.classList.remove("hidden");
        array.forEach(elem => {
        $boxOperations.innerHTML += `
                            <tr id="${elem.id}">
                            <th class="flex justify-start mt-5 sm:mt-0">${elem.description}</th>
                            <th>${elem.category}</th>
                            <th class="hidden sm:flex justify-center">${elem.date}</th>
                            <th class="${elem.type === "ganancia" ? "text-lime-600" : "text-red-600"}"> $ ${elem.amount}</th>
                            <th class="flex flex-col sm:flex-row sm:justify-end ">
                                <button type="button" class="sm:mr-4 text-base"><i class="fa-solid fa-pen btnEditOperation"></i></button>
                                <button type="button" class="sm:ml-4 text-base"><i class="fa-solid fa-trash btnCleanOperation"></i></button>
                            </th>
                        </tr>
                        `
                        
});
addEventIconEditOperation()

}}


const valueNewOperation = () => {
    valueDescription =   $addDescription.value ;
    valueAmount = $addAmount.value ;
    valueType = $addType.value ;
    valueCategory = $addCategoryNewOperation.value ;
    valueDate = $addDate.value ;
}

const cleanNewOperation = () => {
     $addDescription.value = "" ;
    $addAmount.value = "" ;
    $addDate.value = "" ;
}

const typeOperation = (value) => {
    return value === "expense" ? "gasto" : "ganancia"
}

const addNewOperation = () => {
    operations.push({id: crypto.randomUUID() ,description: valueDescription, amount: Number(valueAmount) , type: typeOperation(valueType) , category: valueCategory , date: tranformDate(valueDate)})
}

let errorsOperation = false

const valueInputOperation = () => {
    errorsOperation = false

    if (!valueDescription.trim()) {
        $errorDescriptionOperation.classList.remove("hidden")
        errorsOperation = true
    } else {
        $errorDescriptionOperation.classList.add("hidden")
    }
    
    if (!valueAmount.trim() || valueEditAmountOperation === "0") {
        $errorAmountOperation.classList.remove("hidden");
        errorsOperation = true
    } else {
        $errorAmountOperation.classList.add("hidden");
    }

    if(!valueDate.trim()){
        $errorDateOperation.classList.remove("hidden");
        errorsOperation = true
    } else {
        $errorDateOperation.classList.add("hidden");
    }
}

// -- EDIT OPERATION --

const valueEditOperationInput = () => {
    valueEditDescriptionOperation = $editDescriptionOperation.value;
    valueEditAmountOperation = $editAmountOperation.value;
    valueEditTypeOperation = $editTypeOperation.value;
    valueEditCategoryOperation = $editCategoryOperation.value;
    valueEditDateOperation = $editDateOperation.value;
  
  }

  

const addEventIconEditOperation = () => {
    const $$btnEditOperation = $$(".btnEditOperation")
    const $$btnCleanOperation = $$(".btnCleanOperation")
    
    $$btnEditOperation.forEach(icon => icon.addEventListener("click", (e) => {
      $sectionEditOperation.classList.remove("hidden");
      $sectionEditCategory.classList.add("hidden");
      $categories.classList.add("hidden");
      $balanceSheets.classList.add("hidden");
      $records.classList.add("hidden");
      $newOperation.classList.add("hidden");
      select = operations.filter( elem => elem.id === icon.parentNode.parentNode.parentNode.id);
      getDataInputEditOperation()
     
      
  }))
  
  $$btnCleanOperation.forEach(icon => icon.addEventListener("click", (e) => {
      operations = operations.filter(elem => elem.id !== icon.parentNode.parentNode.parentNode.id);
      setLocalStorege("operations",operations);
      paintOperation(operations);
      sectionBalance();
      paintSectionSummary();
  }))

}

const getDataInputEditOperation = () => {
    $editDescriptionOperation.value = select[0].description;
    $editAmountOperation.value = select[0].amount;
    $editTypeOperation.value = select[0].type === "gasto" ? "expense" : "gain" ;
    $editCategoryOperation.value = select[0].category;
    $editDateOperation.value = formatDate(select[0].date);
    
  }

  
  const valueEditOperation = () => {
    errorsOperation = false

    if (!valueEditDescriptionOperation.trim()) {
        $errorDescriptionEditOperation.classList.remove("hidden")
        errorsOperation = true
    } else {
        $errorDescriptionEditOperation.classList.add("hidden")
    }
    
    if (!valueEditAmountOperation.trim() || valueEditAmountOperation === "0") {
        $errorAmountEditOperation.classList.remove("hidden");
        errorsOperation = true
    } else {
        $errorAmountEditOperation.classList.add("hidden");
    }

    if(!valueEditDateOperation.trim()){
        $errorDateEditOperation.classList.remove("hidden");
        errorsOperation = true
    } else {
        $errorDateEditOperation.classList.add("hidden");
    }
}


//   - CREATE INPUT PAINT -

const createCategorySelect = () => {

    // -- Filter--

    $filterCategory.innerHTML = `<option value="all">Todos</option>`
    category.forEach( elem => 
        $filterCategory.innerHTML += `
        <option value="${elem.title}">${elem.title}</option>
         `
    )    

    // -- New Operation --

    $addCategoryNewOperation.innerHTML = ""
    category.forEach(elem => 
        $addCategoryNewOperation.innerHTML += `
        <option value="${elem.title}">${elem.title}</option>
        ` 
        )

    // -- Edit Operation
    
    $editCategoryOperation.innerHTML = ``
    category.forEach( elem => 
        $editCategoryOperation.innerHTML += `
        <option value="${elem.title}">${elem.title}</option>
         `
    )    
}




// --- CATEGORY ---

const paintCategory = () => {
    $boxCategory.innerHTML = ""
    category.forEach( elem => {
    $boxCategory.innerHTML += `
    <div class="flex flex-row justify-between p-2">
    <p class="text-lime-400 border border-lime-500 rounded-md p-1 text-lg">${elem.title}</p>
    <div class="fle flex-row justify-between" id="${elem.id}">
    <button class="mr-2 text-base"><i class="fa-solid fa-pen btnEditCategoryItems"></i></button>
    <button class="ml-2 text-base"> <i class="fa-solid fa-trash btnCleanCategoryItems"></i></button>
    </div>
</div>
    `
  })

  addEventIconEditCategory();
  
}

let errorsTitleCategory = false

const valueAddCategory = (value) => {
    
 let serchCategory = category.filter(elem => elem.title.toLocaleLowerCase() === value.toLocaleLowerCase());
 errorsTitleCategory = false

    if (!value.trim()) {
        $errorNameCategory.classList.remove("hidden")
        errorsTitleCategory = true
    } else {
        $errorNameCategory.classList.add("hidden")
    }
    
    if (serchCategory.length === 1) {
        $errorRepeatCategory.classList.remove("hidden");
        errorsTitleCategory = true
    } else {
        $errorRepeatCategory.classList.add("hidden");
    }
}

const createNewCategory = () => {
    let title = $addNewCategory.value
    valueAddCategory(title)
    if(!errorsTitleCategory){
    category.push({ id: category[category.length - 1].id + 1,  title: title})
    setLocalStorege("category",category);
    $addNewCategory.value = ""}
}

const valueEditCategory = (value) => {
    
    let serchCategory = category.filter(elem => elem.title.toLowerCase() === value.toLowerCase() && elem.id !== select[0].id);
    errorsTitleCategory = false
   
       if (!value.trim()) {
           $errorEditNameCategory.classList.remove("hidden")
           errorsTitleCategory = true
       } else {
           $errorEditNameCategory.classList.add("hidden")
       }
       
       if (serchCategory.length === 1) {
           $errorEditRepeatCategory.classList.remove("hidden");
           errorsTitleCategory = true
       } else {
           $errorEditRepeatCategory.classList.add("hidden");
       }
   }


const addEventIconEditCategory = () => {
    const $$btnEditCategoryItems = $$(".btnEditCategoryItems")
    const $$btnCleanCategoryItems = $$(".btnCleanCategoryItems")
    

    $$btnEditCategoryItems.forEach(icon => icon.addEventListener("click", (e) => {
      $sectionEditCategory.classList.remove("hidden");
      $categories.classList.add("hidden");
      $balanceSheets.classList.add("hidden");
      $records.classList.add("hidden");
      $newOperation.classList.add("hidden");
      select = category.filter( elem => elem.id === Number(icon.parentNode.parentNode.id))
      $editNameCategory.value = select[0].title

  }))
  
  $$btnCleanCategoryItems.forEach(icon => icon.addEventListener("click", (e) => {
      category = category.filter(elem => elem.id !== Number(icon.parentNode.parentNode.id));
      setLocalStorege("category",category);
      paintCategory();
  }))
}


// ----- SECTION RECORDS  ------ 

const divisionCategory = (category) => {
    return operations.filter(elem => elem.category === category)
}

const positiveBalance = (array) => {
    return array.filter(elem => elem.type === "ganancia")
}

const negativeBalance = (array) => {
    return array.filter(elem => elem.type === "gasto")
}

const totalPositiveBalance = (array) =>{
    return sum(positiveBalance(array))
}

const totalNegativeBalance = (array) => {
    return sum(negativeBalance(array))
}


const balance = (array) => {
    let balance = 0;
    balance = sum(positiveBalance(array)) - sum(negativeBalance(array))
    return balance
}



const categoryHigherGain = () => {
    let suma = 0
    let categoryMoreGain 
    for(let i = 0 ; i < category.length ; i++){
        if(suma < totalPositiveBalance(divisionCategory(category[i].title))) {
            suma = totalPositiveBalance(divisionCategory(category[i].title))
            categoryMoreGain = {category: category[i].title, amount: totalPositiveBalance(divisionCategory(category[i].title)) }
        }
    }
    return categoryMoreGain
}







const categoryHigherExpense = () =>{
    let suma = 0
    let categoryLessExpense  
    for(let i = 0 ; i < category.length ; i++){
        if(suma < totalNegativeBalance(divisionCategory(category[i].title))) {
            suma = totalNegativeBalance(divisionCategory(category[i].title))
            categoryLessExpense = {category: category[i].title, amount: totalNegativeBalance(divisionCategory(category[i].title)) }
        }
    }
    return categoryLessExpense
}



const categoryMoreBalance = () => {
    let suma = 0
    let moreBalance 
    for(let i = 0 ; i < category.length ; i++){ 
        if(balance(divisionCategory(category[i].title)) > suma) {
          suma = balance(divisionCategory(category[i].title))
          moreBalance = {category: category[i].title, amount: balance(divisionCategory(category[i].title))}
        }
    }
    return moreBalance
}


       
const balancesMonth = () => {
    const numMonths = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
    let arrayYears = [];
    let arrayYearsOperation = []
    
   
    for(const balance of operations){
      if(!arrayYears.includes(year(balance.date))){
        arrayYears.push(year(balance.date))
      }
      
    }
    
    
    for(let i = 0; i < arrayYears.length ; i++ ) {
        arrayYearsOperation.push({anio: arrayYears[i] , operation: []})
        for(const bal of operations){
        if(Number(year(bal.date)) === Number(arrayYears[i])){
        arrayYearsOperation[i].operation.push(bal)
    }
    }}
   
    
   

    for(let i = 0 ; i < arrayYearsOperation.length ; i++){
        let months = [{},
            { mes: "Ene", operation: [] },
            { mes: "Feb", operation: [] },
            { mes: "Mar", operation: [] },
            { mes: "Apr", operation: [] },
            { mes: "May", operation: [] },
            { mes: "Jun", operation: [] },
            { mes: "Jul", operation: [] },
            { mes: "Agos", operation: [] },
            { mes: "Sep", operation: [] },
            { mes: "Oct", operation: [] },
            { mes: "Nov", operation: [] },
            { mes: "Dic", operation: [] }
            ];
        for (const num of numMonths) {
        months[num].operation = arrayYearsOperation[i].operation.filter(elem => month(elem.date) == num )
        }                       
        arrayYearsOperation[i].meses = months
    }
    return arrayYearsOperation 
}


let operationsDivision = balancesMonth()


const monthHigherGain = () => {
    let suma = 0
    let higherGain
   for(let i = 0; i < operationsDivision.length; i++) {
    
    for(let ind = 1; ind < operationsDivision[i].meses.length ; ind++) {
        
        if(totalPositiveBalance(operationsDivision[i].meses[ind].operation) > suma){
          suma = totalPositiveBalance(operationsDivision[i].meses[ind].operation);
          higherGain = {date: `${ind.toString().length === 1 ? "0" + ind : ind}-${operationsDivision[i].anio}`, amount: totalPositiveBalance(operationsDivision[i].meses[ind].operation) }
        }
    }
   }
   return higherGain
}



const monthHigherExpense = () => {
    let suma = 0
    let higherExpense
   for(let i = 0; i < operationsDivision.length; i++) {
    
    for(let ind = 1; ind < operationsDivision[i].meses.length ; ind++) {
        
        if(totalNegativeBalance(operationsDivision[i].meses[ind].operation) > suma){
          suma = totalNegativeBalance(operationsDivision[i].meses[ind].operation);
          higherExpense = {date: `${ind.toString().length === 1 ? "0" + ind : ind}-${operationsDivision[i].anio}`, amount: totalNegativeBalance(operationsDivision[i].meses[ind].operation) }
        }
    }
   }
   return higherExpense
}


const totalCategory = (category) => {
   let totalPositive = totalPositiveBalance(divisionCategory(category))
   let totalNegative = totalNegativeBalance(divisionCategory(category))
   let average = balance(divisionCategory(category))
   return {positive: totalPositive, negative:totalNegative, balance: average }
}






const paintSectionCategorySummary = () => {
    if(operations.length !== 0){
    if(categoryHigherGain() !== undefined ) { 
    $categoryHigherGainName.classList.remove("hidden");
    $categoryHigherGainName.innerText = categoryHigherGain().category;
    $categoryHigherGainAmount.innerText = `$ ${categoryHigherGain().amount}`;
    } else {
        $categoryHigherGainName.classList.add("hidden");
    }
    if(categoryHigherExpense() !== undefined) {
    $categoryHigherExpenseName.classList.remove("hidden");    
    $categoryHigherExpenseName.innerText = categoryHigherExpense().category;
    $categoryHigherExpenseAmount.innerText = `$ ${categoryHigherExpense().amount}`;
    } else {
    $categoryHigherExpenseName.classList.add("hidden");
    }
    if(categoryMoreBalance() !== undefined ) {
    $categoryMoreBalanceName.classList.remove("hidden");
    $categoryMoreBalanceName.innerText= categoryMoreBalance().category;
    $categoryMoreBalanceAmount.innerText= `$ ${categoryMoreBalance().amount}`;
    } else {
        $categoryMoreBalanceName.classList.add("hidden");
    }
    if(monthHigherGain() !== undefined ){
    $monthHigherGainDate.innerText = monthHigherGain().date;
    $monthHigherGainAmount.innerText = `$ ${monthHigherGain().amount}`;
    }
    if(monthHigherExpense() !== undefined ){
    $monthHigherExpenseDate.innerText = monthHigherExpense().date;
    $monthHigherExpenseAmount.innerText = `$ ${monthHigherExpense().amount}`
    }
}
}


const paintSectionTotalCategory = () => {
    $totalCategoryBox.innerHTML = ``
    category.forEach(elem => {
        $totalCategoryBox.innerHTML += `
        <div class="flex flex-row justify-between">
                        <h5 class="w-1/4">${elem.title}</h5>
                        <p class="w-1/4 flex justify-end text-lime-600">+$ ${totalCategory(elem.title).positive}</p>
                        <p class="w-1/4 flex justify-end text-red-600">-$ ${totalCategory(elem.title).negative}</p>
                        <p class="w-1/4 flex justify-end">$${totalCategory(elem.title).balance}</p>
                    </div>
        `
    })
    
    }

    const sumOperationMonth = () => {
        let date
        let totalPositive
        let totalNegative
        let average
        $sumOperationMonthBox.innerHTML = ``
        for(let i = 0; i < operationsDivision.length; i++) {
            for(let a = 1; a < operationsDivision[i].meses.length; a++){
                date = `${a.toString().length === 1 ? "0" + a : a}-${operationsDivision[i].anio}`
                totalPositive =  totalPositiveBalance(operationsDivision[i].meses[a].operation);
                totalNegative = totalNegativeBalance(operationsDivision[i].meses[a].operation);
                average = balance(operationsDivision[i].meses[a].operation)
                if(average !== 0){
                $sumOperationMonthBox.innerHTML += `
            <div class="flex flex-row justify-between">
                        <h5 class="w-1/4">${date}</h5>
                        <p class="w-1/4 flex justify-end text-lime-600">+$ ${totalPositive}</p>
                        <p class="w-1/4 flex justify-end text-red-600">-$ ${totalNegative}</p>
                        <p class="w-1/4 flex justify-end ">$${average}</p>
                        </div>
            `
        }}
            
    
        }
    } 

const paintSectionSummary = ( )=> {
paintSectionCategorySummary()
paintSectionTotalCategory()
sumOperationMonth()
}

// ----- LOAD DATA ------

const loadData = () => {
if(operations.length === 0){
 $withoutResult.classList.remove("hidden");
 $conatinerOperation.classList.add("hidden");
} else {
 $withoutResult.classList.add("hidden");
 $conatinerOperation.classList.remove("hidden");
 paintOperation(operations);
} 
sectionBalance();
createCategorySelect();
paintCategory();
paintSectionSummary();
}


// -------------- EVENTOS ----------

// --- NAV --- 

loadData()

$menuBars.addEventListener("click", ()=> {
    animateBars()
} )

$btnCategoriesNav.addEventListener("click" , (e) => {
    $categories.classList.remove("hidden");
    $balanceSheets.classList.add("hidden");
    $records.classList.add("hidden");
    $newOperation.classList.add("hidden");
    $sectionEditCategory.classList.add("hidden");
})

$btnBalanceSheetsNav.addEventListener("click" , (e) => {
    $categories.classList.add("hidden");
    $balanceSheets.classList.remove("hidden");
    $records.classList.add("hidden");
    $newOperation.classList.add("hidden");
    $sectionEditCategory.classList.add("hidden");
})

$btnRecords.addEventListener("click", (e) => {
    $categories.classList.add("hidden");
    $balanceSheets.classList.add("hidden");
    $records.classList.remove("hidden");
    $newOperation.classList.add("hidden");
    $sectionEditCategory.classList.add("hidden");
})

$btnMenuBarsBalanceSheets.addEventListener("click", (e) => {
    $categories.classList.add("hidden");
    $balanceSheets.classList.remove("hidden");
    $records.classList.add("hidden");
    $newOperation.classList.add("hidden");
    $sectionEditCategory.classList.add("hidden");
    animateBars()
})

$btnMenuBarsCategories.addEventListener("click" , (e) => {
    $categories.classList.remove("hidden");
    $balanceSheets.classList.add("hidden");
    $records.classList.add("hidden");
    $newOperation.classList.add("hidden");
    $sectionEditCategory.classList.add("hidden");
    animateBars()
})

$btnMenuBarsRecords.addEventListener("click", (e) => {
    $categories.classList.add("hidden");
    $balanceSheets.classList.add("hidden");
    $records.classList.remove("hidden");
    $newOperation.classList.add("hidden");
    $sectionEditCategory.classList.add("hidden");
    animateBars()
})


// --- BALANCES ---

$btnNewO.addEventListener("click", (e) => {
    $newOperation.classList.remove("hidden");
    $balanceSheets.classList.add("hidden");
})

// -- Filter--

$hiddenFilter.addEventListener("click", (e) => {
    $itemsFilters.classList.add("hidden")
    $showFilter.classList.remove("hidden")
    $hiddenFilter.classList.add("hidden")
})
$showFilter.addEventListener("click", (e) => {
    $itemsFilters.classList.remove("hidden")
    $hiddenFilter.classList.remove("hidden")
    $showFilter.classList.add("hidden")
})

$filterType.addEventListener("change", (e) => {
    functionFilter();
    functionFilterPaint();
})

$filterCategory.addEventListener("change", (e) => {
    functionFilter();
    functionFilterPaint();
})

$filterDate.addEventListener("change", (e) => {
    functionFilter();
    functionFilterPaint();
})

$filterOrder.addEventListener("change", (e) => {
    functionFilter();
    functionFilterPaint();
})

// -- NEW OPERATION --

$btnNewOperationCancel.addEventListener("click", (e) => {
    $newOperation.classList.add("hidden");
    $balanceSheets.classList.remove("hidden");
})

$btnAddNewOperation.addEventListener("click", (e) => {
    valueNewOperation();
    valueInputOperation();
    if(!errorsOperation){
    addNewOperation();
    setLocalStorege("operations", operations);
    setLocalStorege("category",category);
    paintOperation(operations);
    cleanNewOperation();
    $newOperation.classList.add("hidden");
    $balanceSheets.classList.remove("hidden");
    sectionBalance();
    paintSectionSummary();
    }
})


// -- Edit Operation 

$btnEditOperation.addEventListener("click", (e) => {
    valueEditOperationInput();
    valueEditOperation();
    if(!errorsOperation){
    for(const operation of operations){
        if(operation.id === select[0].id){
            operation.description = valueEditDescriptionOperation;
            operation.amount = Number(valueEditAmountOperation);
            operation.type =  typeOperation(valueEditTypeOperation);
            operation.category = valueEditCategoryOperation
            operation.date = tranformDate(valueEditDateOperation)
        }
    }
    setLocalStorege("operations",operations);
    paintOperation(operations);
    sectionBalance();
    paintSectionSummary();
    $sectionEditOperation.classList.add("hidden");
    $balanceSheets.classList.remove("hidden");
}})

$btnEditOperationCancel.addEventListener("click", (e) => {
    $sectionEditOperation.classList.add("hidden");
    $balanceSheets.classList.remove("hidden");
})

// --- CATEGORY ---

$btnAddNewCategory.addEventListener("click", (e) => {
    createNewCategory();
    paintCategory();
    paintSectionSummary();
    createCategorySelect()
})

$btnEditCategoryCancel.addEventListener("click" , (e) => {
    $editNameCategory.value = ""
    $sectionEditCategory.classList.add("hidden");
      $categories.classList.remove("hidden");
})

$btnEditCategory.addEventListener("click", (e) => {
    valueEditCategory($editNameCategory.value)
    if(!errorsTitleCategory){
    for (const elem of category) {
        if (elem.id === select[0].id) {
            elem.title = $editNameCategory.value;
        }}
    $editNameCategory.value = "";
    paintCategory();
    createCategorySelect();
    setLocalStorege("category",category);
    paintSectionSummary();
    $sectionEditCategory.classList.add("hidden");
    $categories.classList.remove("hidden");}
})







})