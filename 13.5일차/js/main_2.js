// 1.for문, if문, 배열, 반복문

// 만약 ID가 명확하고, 한 번만 접근해야 하는 경우라면 여전히 getElementById를 사용하는 것도 괜찮음!

// 간단한 프로젝트나 학습 단계에서는 getElementById를 써도 괜찮음!

// 실무 프로젝트나 큰 규모의 코드에서는 querySelector를 사용해서 일관성 있는 코드 작성 습관을 들이는 걸 추천


const itemPrice_1 =[]

document.getElementById('add-item').addEventListener('click', function () {
  const itemPriceInput = document.getElementById('item-price');
  const price = Number(itemPriceInput.value);

  if(price > 0){
    itemPrice_1.push(price);
    additem(price);
    updateTotalPrice();
  }

  itemPriceInput.value = '';
  // 입력 칸 초기화 해야함!!!!

});

//상품 리스트에 아이템 추가 
function additem(price) {
  const itemList = document.getElementById('item-list');
  const listItme = document.createElement('li');
  listItme.textContent = `${price} 원`;
  listItme.className = 'item';
  itemList.appendChild(listItme);

}

// 총 합계 업데이트(for문!!!)

function updateTotalPrice() {
  let total = 0;
  for (let i = 0; i < itemPrice_1.length; i++){
    total += itemPrice_1[i];
  }
  document.getElementById('total-price').textContent = total;

}

// 할인코드 적용함

document.getElementById('apply-discount').addEventListener('click', function() {
  const discountCode = document.getElementById('discount-code').value;
  let discountAmount = 0;
 
  if(discountCode === 'SALE10'){
    discountAmount = 100;
  }else if(discountCode === 'SALE20'){
    discountAmount = 200;
  }else{
    alert("유효하지 않은 할인 코드입니닷!");
    return;
  }

  // 총 합계에서 할인 적용

  let currentTotal = Number(document.getElementById('total-price').textContent);
  currentTotal -=discountAmount
  // 할인 금액
  document.getElementById('total-price').textContent = currentTotal > 0 ? currentTotal : 0;

});

// 이벤트 위임=>리트아이템 삭제!
document.getElementById('item-list').addEventListener('click', function(e) {
  if(e.target && e.target.className === 'item'){
    const itemText = e.target.textContent;
    const itemPrice = Number(itemText.replace("원", ''));
    removeItem(itemPrice);
    e.target.remove();
  }
});

function removeItem(price) {
  const index =itemPrice_1.indexOf(price);
  if(index > -1) {
    itemPrice_1.splice(index, 1);
    updateTotalPrice();
  }
}


// 차근차근 이해 및 복습필요**************************


