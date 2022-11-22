import React, { useState } from 'react';
import styles from './Footer.module.css';
import FooterAd from './FooterAd/FooterAd';
import Container from '../Container/Container';

export default function Footer() {
  const [selected, setSelect] = useState('');
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  const goFamilySite = () => {
    if (selected === '') {
      return;
    }
    window.open(selected, '_blank');
  };

  return (
    <div className={styles.footerWrapper}>
      <FooterAd/>
      <Container className={styles.footer}>
        <ul className={styles.policy}>
          {policyList.map((policy, index) => (
            <li key={index}>
              <a
                href={policy.href}
                target='_blank'
                rel='noopener noreferrer'
                title={policy.title}
              >
                {policy.strong ? <strong>{policy.text}</strong> : policy.text}
              </a>
            </li>
          ))}
        </ul>
        <article className={styles.comPanyInfoContainer}>
          <section className={styles.companyInfo}>
            <address>
              (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰
              6층(한강로동)
            </address>
            <dl className={styles.companyInfoList}>
              <dt>대표이사</dt>
              <dd>허민회</dd>
              <dt>사업자등록번호</dt>
              <dd>104-81-45690</dd>
              <dt>통신판매업신고번호</dt>
              <dd>
                2017-서울용산-0662
                <a href='/'>사업자정보확인</a>
              </dd>
            </dl>
            <dl className={styles.companyInfoList}>
              <dt>호스팅사업자</dt>
              <dd>CJ올리브네트웍스</dd>
              <dt>개인정보보호 책임자</dt>
              <dd>심준범</dd>
              <dt>대표이메일</dt>
              <dd>cjcgvmaster@cj.net</dd>
            </dl>
            <p>© CJ CGV. All Rights Reserved</p>
          </section>
          <section className={styles.familySite}>
            <select name='list' id='familysite' onChange={handleSelect}>
              <option value=''>계열사 바로가기</option>
              <optgroup label='CJ그룹'>
                <option value='http://www.cj.net/'>CJ 주식회사</option>
              </optgroup>
              <optgroup label='식품 & 식품서비스'>
                <option value='https://www.cj.co.kr/kr/index'>
                  CJ제일제당
                </option>
                <option value='https://www.cjfoodville.co.kr/main.asp'>
                  CJ푸드빌
                </option>
                <option value='http://www.cjfreshway.com/index.jsp'>
                  CJ프레시웨이
                </option>
              </optgroup>
              <optgroup label='생명공학'>
                <option value='https://www.cj.co.kr/kr/about/business/bio'>
                  CJ제일제당 BIO사업부문
                </option>
                <option value='https://www.cj.co.kr/kr/about/business/bio'>
                  CJ Feed&Card
                </option>
              </optgroup>
              <optgroup label='물류 & 신유통'>
                <option value='https://www.cjlogistics.com/ko/main'>
                  CJ대한통운
                </option>
                <option value='http://www.cjenc.co.kr/kr/Default.asp'>
                  CJ대한통운 건설부문
                </option>
                <option value='https://www.oliveyoung.co.kr/store/company/brandStory.do'>
                  CJ올리브영
                </option>
                <option value='https://www.cjolivenetworks.co.kr:449/'>
                  CJ올리브네트웍스
                </option>
                <option value='https://www.cjoshopping.com:9002/index.asp'>
                  CJ ENM 커머스부문
                </option>
                <option value=''></option>
              </optgroup>
              <optgroup label='엔터테인먼트 & 미디어'>
                <option value='http://www.cjem.net/main/?locale=ko'>
                  CJ ENM 엔터테인먼트부문
                </option>
                <option value='http://corp.cgv.co.kr/'>CJ CGV</option>
              </optgroup>
            </select>
            <button type='button' onClick={goFamilySite} className={styles.submitBtn}>
              GO
            </button>
          </section>
        </article>
      </Container>
    </div>
  );
}
const policyList = [
  {
    href: 'http://corp.cgv.co.kr/',
    title: '회사 소개',
    text: '회사소개',
    strong: false,
  },
  {
    href: 'http://corp.cgv.co.kr/company/ir/financial/financial_list.aspx',
    title: 'IR',
    text: 'IR',
    strong: false,
  },
  {
    href: 'http://corp.cgv.co.kr/company/recruit/step/default.aspx',
    title: '채용정보',
    text: '채용정보',
    strong: false,
  },
  {
    href: 'http://corp.cgv.co.kr/company/advertize/ad_Default.aspx',
    title: '광고/제휴/출점문의',
    text: '광고/제휴/출점문의',
    strong: false,
  },
  {
    href: 'http://www.cgv.co.kr/rules/service.aspx',
    title: '이용약관',
    text: '이용약관',
    strong: false,
  },
  {
    href: 'http://www.cgv.co.kr/rules/organized.aspx',
    title: '편성기준',
    text: '편성기준',
    strong: false,
  },
  {
    href: 'http://www.cgv.co.kr/rules/privacy.aspx',
    title: '개인정보처리방침',
    text: '개인정보처리방침',
    strong: true,
  },
  {
    href: 'http://www.cgv.co.kr/rules/disclaimer.aspx',
    title: '법적고지',
    text: '법적고지',
    strong: false,
  },
  {
    href: 'http://www.cgv.co.kr/rules/emreject.aspx',
    title: '이메일주소무단수집거부',
    text: '이메일주소무단수집거부',
    strong: false,
  },
  {
    href: 'http://corp.cgv.co.kr/company/ethicalManagement/ceoMessage.aspx',
    title: '윤리경영',
    text: '윤리경영',
    strong: false,
  },
  {
    href: '/company/cyberAudit.aspx',
    title: '사이버감사실',
    text: '사이버감사실',
    strong: false,
  },
];
