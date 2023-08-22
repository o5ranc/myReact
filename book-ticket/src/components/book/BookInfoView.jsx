import React from 'react'

import './BookInfoView.css'
import BOOKDATA from '../../stores/bookData';

const BookInfoView = () => {
  console.log('data : ',);
  return (
    <div className='bookInfoViewWrapper'>
      <div className='titleContainer'>
        <img className='titleLeft' src='/assets/images/musical_small.jpg' />
        <p className='titleRight'>{BOOKDATA[0].title}</p>
      </div>
      <div>
        <strong><span>예매정보</span></strong>
        <ul>
          <li><span className='seatLevel'>전석</span><span class="seatPrice">I열 4번</span></li>
        </ul>
        <table>
          <caption>예매정보</caption>
          <colgroup>
            <col width="70px" />
          </colgroup>
          <tbody>
            <tr>
              <th>일시</th>
              <td id="_startDateTime">2023.09.28(목) 14:00</td>
            </tr>
            <tr>
              <th>티켓금액</th>
              <td id="_price_ticket">0</td>
            </tr>
            <tr>
              <th>예매수수료</th>
              <td id="_price_fee">0</td>
            </tr>
            <tr id="_price_hasAdditionalProduct">
              <th class="hasAdditionalProduct">부가상품</th>
              <td id="_price_additionalProduct">0</td>
            </tr>
            <tr>
              <th>배송료</th>
              <td id="_price_delivery">0</td>
            </tr>
            <tr>
              <th>쿠폰할인</th>
              <td id="_coupon_discount">0</td>
            </tr>
            <tr>
              <th>포인트 사용</th>
              <td id="_price_discount">0</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>총결제</th>
              <td id="_price_amount">0</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default BookInfoView