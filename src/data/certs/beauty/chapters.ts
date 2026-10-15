// 미용사(일반) 과목별 요점 정리
// content: prose 컨테이너 안에 렌더링되는 HTML / keywords: 관련 기출 매칭용

import type { CertChapter } from '../../../lib/certs';

export const CHAPTERS: CertChapter[] = [

  // ===== 미용이론 =====
  {
    subject: 'theory',
    chapter: 'haircut',
    chapterLabel: '헤어커트',
    keywords: ['커트', '테이퍼링', '클리핑', '레이어', '그라데이션', '원랭스', '이사도라', '텐션', '엘리베이션', '엘레베이션', '가위', '레이저', '착강', '전강'],
    content: `
<h3>커트 형태</h3>
<table>
  <thead><tr><th>형태</th><th>특징</th></tr></thead>
  <tbody>
    <tr><td>원랭스</td><td>모든 모발을 같은 선에서 자른 형태. 무게감이 아웃라인에 모인다.</td></tr>
    <tr><td>그라데이션</td><td>아래가 짧고 위로 갈수록 길어진다. 목선 쪽에 층이 생겨 무게감이 중간에 쌓인다.</td></tr>
    <tr><td>레이어</td><td>위가 짧고 아래로 갈수록 길어진다. 층이 많아 가볍고 움직임이 크다.</td></tr>
  </tbody>
</table>

<h3>원랭스 아웃라인</h3>
<ul>
  <li><strong>이사도라</strong>: 앞이 짧고 뒤로 갈수록 길어지는 둥근 선 (앞올림)</li>
  <li><strong>스파니엘</strong>: 앞이 길고 뒤가 짧은 선 (앞내림)</li>
  <li><strong>평행 보브</strong>: 바닥과 수평인 선</li>
  <li><strong>머시룸</strong>: 앞이 짧고 뒤로 둥글게 이어지는 버섯 모양</li>
</ul>

<h3>커트 기법·용어</h3>
<table>
  <thead><tr><th>용어</th><th>의미</th></tr></thead>
  <tbody>
    <tr><td>테이퍼링</td><td>레이저로 모발 끝을 붓끝처럼 가늘게 깎아 숱을 줄이는 기법</td></tr>
    <tr><td>클리핑</td><td>삐져나오거나 상한 모발 끝을 가위로 잘라내는 기법</td></tr>
    <tr><td>틴닝</td><td>길이는 두고 숱만 줄이는 기법 (틴닝가위)</td></tr>
    <tr><td>텐션</td><td>모발을 잡아당기는 힘</td></tr>
    <tr><td>엘리베이션</td><td>모발을 두상에서 들어 올리는 각도. 0도면 무게감, 각도가 클수록 층이 많아진다.</td></tr>
    <tr><td>웨이트</td><td>모발이 겹쳐 무게감이 생기는 부분</td></tr>
  </tbody>
</table>

<h3>가위</h3>
<ul>
  <li><strong>착강가위</strong>: 몸체(협신부)는 연강, 날은 특수강으로 이어 붙인 가위. 부분 수정이 쉽다.</li>
  <li><strong>전강가위</strong>: 전체를 특수강 하나로 만든 가위</li>
</ul>
`,
  },
  {
    subject: 'theory',
    chapter: 'perm-curl',
    chapterLabel: '퍼머넌트 웨이브·컬',
    keywords: ['퍼머', '웨이브', '시스틴', '테스트 컬', '프로세싱', '와인딩', '컬', '스템', '루프', '피봇', '핑거 웨이브', '스윙', '리지', '플러프', '뱅'],
    content: `
<h3>퍼머넌트 웨이브 원리</h3>
<ul>
  <li><strong>제1액(환원제)</strong>: 모발 속 시스틴 결합을 끊어 모양을 바꿀 수 있게 한다.</li>
  <li><strong>제2액(산화제)</strong>: 끊어진 결합을 새로운 형태로 다시 이어 고정한다.</li>
  <li><strong>테스트 컬</strong>: 제1액 작용 중 로드를 풀어 웨이브 형성 정도를 확인하고 프로세싱 타임을 정한다.</li>
</ul>

<h3>웨이브가 잘 안 나오는 경우</h3>
<ul>
  <li>오버프로세싱으로 시스틴이 과하게 파괴된 모발</li>
  <li>비누·경수 샴푸로 금속염 피막이 생긴 모발</li>
  <li>저항성모·발수성모 (약액 침투가 어렵다)</li>
  <li>핫오일 샴푸 직후 (오일막이 약액을 막는다)</li>
</ul>
<p>와인딩할 때 <strong>적당하고 고른 텐션</strong>을 주면 웨이브가 잘 나온다.</p>

<h3>컬의 구성</h3>
<table>
  <thead><tr><th>부분</th><th>설명</th></tr></thead>
  <tbody>
    <tr><td>베이스</td><td>컬을 만드는 모다발의 뿌리 쪽 바닥</td></tr>
    <tr><td>스템</td><td>베이스에서 피벗 포인트까지의 줄기. 컬의 방향과 움직임을 정한다.</td></tr>
    <tr><td>루프</td><td>원형으로 말린 부분</td></tr>
    <tr><td>엔드</td><td>모발 끝</td></tr>
  </tbody>
</table>
<p>컬의 목적은 볼륨, 웨이브, 플러프(모발 끝의 가벼운 움직임)다.</p>

<h3>핑거 웨이브</h3>
<ul>
  <li><strong>스윙 웨이브</strong>: 크게 흔들리는 듯한 웨이브</li>
  <li><strong>스월 웨이브</strong>: 소용돌이치는 듯한 웨이브</li>
  <li><strong>로우 웨이브</strong>: 리지(솟은 부분)가 낮은 웨이브</li>
  <li><strong>덜 웨이브</strong>: 리지가 뚜렷하지 않고 느슨한 웨이브</li>
</ul>

<h3>뱅 (앞머리)</h3>
<ul>
  <li><strong>플러프 뱅</strong>: 컬을 일정한 모양 없이 부풀려 볼륨을 준 뱅</li>
  <li><strong>프린지 뱅</strong>: 가르마 가까이에 작게 낸 뱅</li>
  <li><strong>프렌치 뱅</strong>: 위로 빗어 끝을 플러프해 내려뜨린 뱅</li>
  <li><strong>웨이브 뱅</strong>: 풀웨이브나 하프 웨이브로 만든 뱅</li>
</ul>
`,
  },
  {
    subject: 'theory',
    chapter: 'color-care',
    chapterLabel: '염색·샴푸·트리트먼트',
    keywords: ['컬러링', '염색', '터치업', '리터치', '처녀모', '버진', '패치 테스트', '스트랜드', '샴푸', '핫오일', '브러싱', '트리트먼트', '리컨디셔닝', '헤어 팩', '가발'],
    content: `
<h3>염색 용어</h3>
<table>
  <thead><tr><th>용어</th><th>의미</th></tr></thead>
  <tbody>
    <tr><td>다이 터치업 (리터치)</td><td>염색 후 새로 자란 뿌리 부분에만 하는 염색</td></tr>
    <tr><td>버진 헤어 (처녀모)</td><td>한 번도 화학 시술을 하지 않은 모발</td></tr>
    <tr><td>패치 테스트</td><td>염모제 알레르기 반응 확인 (귀 뒤·팔 안쪽에 바르고 48시간 관찰)</td></tr>
    <tr><td>스트랜드 테스트</td><td>모발 일부에 먼저 염색해 색과 시간을 확인</td></tr>
  </tbody>
</table>

<h3>샴푸·브러싱</h3>
<ul>
  <li><strong>핫오일 샴푸</strong>: 데운 식물성 오일(올리브유 등)로 마사지 후 플레인 샴푸. 건조·손상모용이며 직후 퍼머는 피한다.</li>
  <li><strong>브러싱</strong>: 윤기, 혈액순환 촉진, 먼지·비듬 제거 효과. 두피 상처·염증, 심한 손상모, 화학 시술 직전에는 피한다.</li>
</ul>

<h3>헤어트리트먼트 종류</h3>
<ul>
  <li><strong>헤어 리컨디셔닝</strong>: 손상모를 정상에 가깝게 회복</li>
  <li><strong>클리핑</strong>: 갈라지거나 상한 모발 끝 제거</li>
  <li><strong>헤어 팩</strong>: 영양 공급</li>
</ul>
<p>테이퍼링은 커트 기법이라 트리트먼트에 속하지 않는다.</p>

<h3>가발 손질</h3>
<ul>
  <li>빗질은 <strong>모발 끝에서 뿌리 쪽으로</strong> 조금씩 (뿌리부터 빗으면 모발이 빠진다)</li>
  <li>컨디셔너는 모발에만, 바탕(파운데이션)에는 바르지 않는다</li>
  <li>열은 결 변형·윤기 손실의 원인</li>
</ul>
`,
  },
  {
    subject: 'theory',
    chapter: 'makeup-nail',
    chapterLabel: '메이크업·네일',
    keywords: ['메이크업', '화장', '눈썹', '얼굴형', '데이타임', '소셜', '베이스 코트', '폴리쉬', '네일', '손톱'],
    content: `
<h3>메이크업 종류</h3>
<table>
  <thead><tr><th>종류</th><th>용도</th></tr></thead>
  <tbody>
    <tr><td>데이타임 메이크업</td><td>자연광 아래 일상적인 낮 화장</td></tr>
    <tr><td>소셜 메이크업</td><td>파티·연회 등 저녁 사교 모임용</td></tr>
    <tr><td>페인트 메이크업</td><td>무대 등에서 쓰는 짙은 분장</td></tr>
    <tr><td>컬러포토 메이크업</td><td>컬러 사진 촬영용</td></tr>
  </tbody>
</table>

<h3>얼굴형별 눈썹</h3>
<ul>
  <li><strong>둥근형</strong>: 눈썹산을 살려 약간 각지게</li>
  <li><strong>사각형</strong>: 각진 인상을 줄이도록 둥글게</li>
  <li><strong>역삼각형</strong>: 자연스럽게, 뺨이 마른 경우 눈꼬리를 내려 그린다</li>
  <li><strong>마름모형</strong>: 광대가 넓으므로 수평에 가깝게 그려 이마를 넓어 보이게 한다 (내려 그리면 광대가 강조됨)</li>
</ul>

<h3>네일 코팅</h3>
<ul>
  <li><strong>베이스 코트</strong>: 폴리쉬 전에 바름. 착색 방지, 밀착력 향상</li>
  <li><strong>탑 코트</strong>: 폴리쉬 위에 바름. 광택과 지속력</li>
  <li><strong>네일 강화제</strong>: 찢어지거나 갈라지는 손톱 보강</li>
</ul>
`,
  },
  {
    subject: 'theory',
    chapter: 'history',
    chapterLabel: '미용의 역사',
    keywords: ['고대', '고구려', '신라', '백제', '가체', '쌍상투', '쪽진머리', '낭자머리', '풍기명식'],
    content: `
<h3>삼국시대</h3>
<p>신분과 혼인 여부에 따라 머리모양이 달랐다는 점이 핵심이다.</p>
<table>
  <thead><tr><th>나라</th><th>특징</th></tr></thead>
  <tbody>
    <tr><td>고구려</td><td>벽화에 얹은머리, 쪽진머리, 쌍상투머리, 풍기명식머리 등 다양한 형태</td></tr>
    <tr><td>백제</td><td>기혼녀는 틀어 올리고, 처녀는 땋아 내렸다</td></tr>
    <tr><td>신라</td><td>금은주옥으로 꾸민 가체로 신분과 부를 드러냈다</td></tr>
  </tbody>
</table>

<h3>머리모양</h3>
<ul>
  <li><strong>쌍상투머리</strong>: 앞머리 양쪽에 상투처럼 틀어 얹은 머리</li>
  <li><strong>쪽진머리(낭자머리)</strong>: 뒤통수 아래에 틀어 비녀를 꽂은 머리</li>
  <li><strong>풍기명식머리</strong>: 얹은머리에서 양쪽 머리를 늘어뜨린 형태</li>
</ul>
`,
  },

  // ===== 공중보건학 =====
  {
    subject: 'public-health',
    chapter: 'infection',
    chapterLabel: '감염병·예방접종·기생충',
    keywords: ['전염병', '감염병', '파리', '장티푸스', '이질', '콜레라', '유행성출혈열', '검역', '격리', '예방접종', '결핵', 'BCG', '홍역', '무구조충', '유구조충', '기생충'],
    content: `
<h3>매개체별 감염병</h3>
<table>
  <thead><tr><th>매개체</th><th>감염병</th></tr></thead>
  <tbody>
    <tr><td>파리</td><td>장티푸스, 이질, 콜레라 등 소화기계 감염병</td></tr>
    <tr><td>모기</td><td>말라리아, 일본뇌염, 사상충증</td></tr>
    <tr><td>쥐</td><td>유행성출혈열(신증후군출혈열), 페스트, 렙토스피라증</td></tr>
  </tbody>
</table>

<h3>감염병 관리</h3>
<ul>
  <li><strong>검역</strong>: 유행 지역에서 들어오는 사람·동물·물품을 감시해 외국 감염병 유입 차단</li>
  <li><strong>격리</strong>: 감염자나 의심자를 분리해 전파 차단</li>
</ul>

<h3>예방접종 시기</h3>
<table>
  <thead><tr><th>백신</th><th>기초접종 시기</th></tr></thead>
  <tbody>
    <tr><td>결핵 (BCG)</td><td>생후 4주 이내</td></tr>
    <tr><td>B형간염</td><td>출생 직후, 1개월, 6개월</td></tr>
    <tr><td>홍역·볼거리·풍진 (MMR)</td><td>생후 12~15개월</td></tr>
    <tr><td>일본뇌염</td><td>생후 12개월 이후</td></tr>
  </tbody>
</table>

<h3>기생충과 감염원</h3>
<table>
  <thead><tr><th>기생충</th><th>감염원</th></tr></thead>
  <tbody>
    <tr><td>무구조충 (민촌충)</td><td>쇠고기</td></tr>
    <tr><td>유구조충 (갈고리촌충)</td><td>돼지고기</td></tr>
    <tr><td>간흡충 (간디스토마)</td><td>잉어 등 민물고기</td></tr>
    <tr><td>폐흡충 (폐디스토마)</td><td>민물 게·가재</td></tr>
  </tbody>
</table>
`,
  },
  {
    subject: 'public-health',
    chapter: 'environment-industry',
    chapterLabel: '환경·산업보건·보건지표',
    keywords: ['용존산소', 'DO', 'BOD', '하수', '잠함병', '산업피로', '비례사망지수', '보건지표', '의료보험', '영양소', '조절소', '비타민'],
    content: `
<h3>수질 지표</h3>
<table>
  <thead><tr><th>지표</th><th>의미</th><th>오염이 심하면</th></tr></thead>
  <tbody>
    <tr><td>DO (용존산소)</td><td>물에 녹아 있는 산소량</td><td>낮아진다</td></tr>
    <tr><td>BOD (생화학적 산소요구량)</td><td>미생물이 유기물을 분해할 때 쓰는 산소량</td><td>높아진다</td></tr>
  </tbody>
</table>

<h3>산업보건</h3>
<ul>
  <li><strong>잠함병(감압병)</strong>: 고압 환경에서 갑자기 감압할 때 체액·혈액 속 질소가 기포로 변해 생긴다</li>
  <li><strong>산업피로 대책</strong>: 적절한 휴식 배분, 효율적인 에너지 사용, 개인차를 고려한 작업량 배정</li>
</ul>

<h3>보건지표</h3>
<ul>
  <li>WHO의 국가 간 건강수준 비교 지표: <strong>비례사망지수</strong>, 평균수명, 조사망률</li>
  <li>비례사망지수 = 50세 이상 사망자 수 / 전체 사망자 수 × 100 (높을수록 건강수준이 좋다)</li>
</ul>

<h3>의료보험 연혁</h3>
<p>1977년 직장의료보험 시작 → 1988년 농어촌 지역 → <strong>1989년 전 국민 의료보험</strong></p>

<h3>영양소 기능</h3>
<ul>
  <li>열량소: 탄수화물, 지방, 단백질</li>
  <li>구성소: 단백질, 무기질</li>
  <li>조절소: <strong>비타민</strong>, 무기질, 물</li>
</ul>
`,
  },

  // ===== 소독학 =====
  {
    subject: 'disinfection',
    chapter: 'basics',
    chapterLabel: '소독 용어·물리적 소독',
    keywords: ['소독의 정의', '멸균', '방부', '일광', '자외선', '자비', '건열', '고압증기', '방사선', '물리적', '도자기'],
    content: `
<h3>용어</h3>
<table>
  <thead><tr><th>용어</th><th>의미</th></tr></thead>
  <tbody>
    <tr><td>멸균</td><td>아포를 포함한 모든 미생물을 죽인다</td></tr>
    <tr><td>소독</td><td>병원성 미생물을 죽이거나 제거해 감염력을 없앤다</td></tr>
    <tr><td>방부</td><td>미생물의 성장을 억제해 부패·발효를 막는다</td></tr>
  </tbody>
</table>
<p>살균력의 강도: <strong>멸균 &gt; 소독 &gt; 방부</strong></p>

<h3>물리적 소독법</h3>
<table>
  <thead><tr><th>방법</th><th>조건·대상</th></tr></thead>
  <tbody>
    <tr><td>일광소독</td><td>햇빛 속 자외선 이용. 260~280nm 부근의 살균력이 강하다</td></tr>
    <tr><td>자비소독</td><td>끓는 물(100℃)에 15~20분. 식기, 도자기, 유리, 금속기구</td></tr>
    <tr><td>건열멸균</td><td>건열멸균기 160~170℃에서 1~2시간. 유리, 금속</td></tr>
    <tr><td>고압증기멸균</td><td>121℃, 15파운드에서 15~20분. 아포까지 죽이는 가장 확실한 멸균</td></tr>
    <tr><td>방사선멸균</td><td>감마선 등 이용</td></tr>
  </tbody>
</table>

<h3>자비소독 첨가제</h3>
<p>살균력을 높이고 금속의 녹을 막기 위해 넣는다: 탄산나트륨(중조) 1~2%, 크레졸 비누액 2~3%, 석탄산 5%.<br>
<strong>승홍수는 금속을 부식시키므로 넣지 않는다.</strong></p>
`,
  },
  {
    subject: 'disinfection',
    chapter: 'chemical',
    chapterLabel: '화학적 소독제',
    keywords: ['석탄산', '크레졸', '포르말린', '과산화수소', '염소', '승홍', '알코올', '알콜', '생석회', '화학적', '희석'],
    content: `
<h3>주요 소독제</h3>
<table>
  <thead><tr><th>소독제</th><th>농도</th><th>특징·대상</th></tr></thead>
  <tbody>
    <tr><td>석탄산 (페놀)</td><td>3%</td><td>단백질 응고로 살균. 유기물이 있어도 효력 유지 → 배설물, 의류, 고무제품. 소독력 비교 기준(석탄산 계수). 아포·바이러스에는 약하다</td></tr>
    <tr><td>크레졸</td><td>3%</td><td>석탄산보다 살균력이 강하다. 배설물, 손 소독</td></tr>
    <tr><td>포르말린</td><td>-</td><td>고무, 금속, 플라스틱 기구. 배설물에는 부적합</td></tr>
    <tr><td>과산화수소</td><td>3%</td><td>자극이 적어 상처 소독, 구강 세정</td></tr>
    <tr><td>염소</td><td>-</td><td>살균력이 강하고 저렴 → 상수·하수 소독. 냄새·자극·부식성</td></tr>
    <tr><td>승홍수</td><td>0.1%</td><td>살균력이 강하지만 금속 부식성, 독성</td></tr>
    <tr><td>알코올</td><td>70~75%</td><td>손, 피부, 가위 등 기구 표면</td></tr>
    <tr><td>생석회</td><td>-</td><td>화장실, 하수도 등 넓은 곳의 배설물</td></tr>
  </tbody>
</table>

<h3>희석 계산</h3>
<p>필요한 원액 양 = 만들 양 × 목표 농도 / 원액 농도</p>
<p>예: 100% 알코올로 70% 알코올 400mL → 원액 400 × 0.7 = <strong>280mL</strong>, 물 <strong>120mL</strong></p>
`,
  },

  // ===== 피부학 =====
  {
    subject: 'skin',
    chapter: 'structure-type',
    chapterLabel: '피부 구조·유형',
    keywords: ['기저층', '유극층', '과립층', '각질층', '유두층', '멜라닌', '건성', '지성', '수렴', '화장수', '필링', 'AHA', '각질'],
    content: `
<h3>표피 구조 (위에서 아래로)</h3>
<table>
  <thead><tr><th>층</th><th>특징</th></tr></thead>
  <tbody>
    <tr><td>각질층</td><td>죽은 세포층. 외부 자극 방어, 수분 유지</td></tr>
    <tr><td>투명층</td><td>손바닥·발바닥에만 있다</td></tr>
    <tr><td>과립층</td><td>각질화가 시작되는 층</td></tr>
    <tr><td>유극층</td><td>표피에서 가장 두꺼운 층. 랑게르한스세포(면역)</td></tr>
    <tr><td>기저층</td><td>새 세포 생성. <strong>멜라닌형성세포</strong>가 있어 피부색을 결정한다</td></tr>
  </tbody>
</table>
<p>유두층·망상층은 진피에 속한다.</p>

<h3>자외선과 피부</h3>
<p>강한 자외선을 받으면 피부는 방어를 위해 <strong>각질층을 두껍게</strong> 하고 멜라닌을 늘린다. 피서 후 피부가 두껍고 거칠어지는 이유다.</p>

<h3>피부 유형별 관리</h3>
<ul>
  <li><strong>건성</strong>: 수분과 유분을 함께 공급</li>
  <li><strong>지성</strong>: 수렴 화장수(아스트린젠트)로 모공 수축, 피지 억제</li>
</ul>

<h3>화장수·필링</h3>
<ul>
  <li><strong>수렴 화장수</strong>: 모공 수축, 피지 분비 억제</li>
  <li><strong>유연 화장수</strong>: 각질층을 부드럽게 하고 수분 공급</li>
  <li><strong>AHA</strong>: 글리콜릭산·락틱산 등 과일산. 각질을 벗겨내는 화학적 필링 성분</li>
</ul>
`,
  },
  {
    subject: 'skin',
    chapter: 'disease-nutrition',
    chapterLabel: '피부질환·영양',
    keywords: ['티눈', '아토피', '주사', '비립종', '켈로이드', '베를로크', '습진', '비타민', '필수지방산', '리놀', '기미'],
    content: `
<h3>피부질환</h3>
<table>
  <thead><tr><th>질환</th><th>특징</th></tr></thead>
  <tbody>
    <tr><td>티눈</td><td>압박·마찰로 각질층 일부가 두꺼워진 것. 중심의 각질핵이 안쪽으로 파고들어 누르면 아프다</td></tr>
    <tr><td>아토피성 피부염</td><td>유전 경향이 강한 만성 습진. 팔꿈치 안쪽·목 등 접히는 부위, 심한 가려움</td></tr>
    <tr><td>주사 (로사세아)</td><td>40~50대. 모세혈관 확장·파손으로 코와 양 볼이 나비 모양으로 붉어진다</td></tr>
    <tr><td>비립종</td><td>눈가 등에 생기는 좁쌀 같은 흰 알갱이</td></tr>
    <tr><td>켈로이드</td><td>상처 부위가 과하게 부풀어 오른 흉터</td></tr>
    <tr><td>베를로크 피부염</td><td>향료가 묻은 부위에 햇빛이 닿아 생기는 색소침착</td></tr>
  </tbody>
</table>

<h3>비타민과 피부</h3>
<table>
  <thead><tr><th>비타민</th><th>결핍 증상</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>피부 건조, 각질화, 야맹증</td></tr>
    <tr><td>B2</td><td>구순염, 피부염</td></tr>
    <tr><td>C</td><td>기미·색소침착, 괴혈병 (멜라닌 생성 억제, 콜라겐 합성)</td></tr>
    <tr><td>D</td><td>구루병 (자외선으로 피부에서 합성)</td></tr>
    <tr><td>E</td><td>노화 촉진 (항산화)</td></tr>
  </tbody>
</table>

<h3>필수지방산 (비타민 F)</h3>
<p>체내에서 만들 수 없는 불포화지방산: <strong>리놀레산(리놀산), 리놀렌산, 아라키돈산</strong>. 타르타르산(주석산)은 유기산이라 해당하지 않는다.</p>
`,
  },

  // ===== 공중위생법규 =====
  {
    subject: 'law',
    chapter: 'business-license',
    chapterLabel: '영업신고·면허·위생교육',
    keywords: ['영업신고', '신고', '면허', '결격', '위생교육', '영업소 외', '면허증', '게시', '명예공중위생감시원', '위생관리의무'],
    content: `
<p>2010년 기출의 "보건복지가족부"는 현재 <strong>보건복지부</strong>다. 법 개정으로 바뀐 내용은 현행 기준을 함께 적었다.</p>

<h3>영업신고</h3>
<ul>
  <li>시장·군수·구청장에게 신고</li>
  <li>제출 서류: 영업시설 및 설비개요서, 위생교육 수료증, 면허증 원본</li>
</ul>

<h3>위생교육</h3>
<ul>
  <li>영업신고 <strong>전에 미리</strong> 받는 것이 원칙. 부득이하면 영업 개시 후 6개월 이내</li>
  <li>영업자는 매년 3시간</li>
</ul>

<h3>면허 결격사유</h3>
<ul>
  <li>피성년후견인 (과거 금치산자)</li>
  <li>정신질환자 (전문의가 적합하다고 인정하면 제외)</li>
  <li>결핵 등 공중위생에 영향을 주는 감염병 환자</li>
  <li>약물 중독자</li>
  <li>면허 취소 후 1년이 지나지 않은 자</li>
</ul>

<h3>영업소 외 시술이 허용되는 경우</h3>
<ul>
  <li>질병 등으로 영업소에 나올 수 없는 사람</li>
  <li>혼례 등 의식 직전</li>
  <li>사회복지시설 봉사활동</li>
  <li>방송 등 촬영 직전</li>
  <li>시장·군수·구청장이 특별한 사정을 인정한 경우</li>
</ul>

<h3>위생관리 의무 (이·미용업)</h3>
<ul>
  <li>영업소 안에 면허증 원본 게시</li>
  <li>소독한 기구와 하지 않은 기구를 구분 보관</li>
  <li>1회용 면도날은 손님 1명에게만 사용</li>
</ul>

<h3>공중위생감시</h3>
<ul>
  <li><strong>공중위생감시원</strong>: 관계 공무원. 출입·검사 권한</li>
  <li><strong>명예공중위생감시원</strong>: 시·도지사가 지도·계몽 등을 위해 둘 수 있다</li>
</ul>
`,
  },
  {
    subject: 'law',
    chapter: 'penalty',
    chapterLabel: '행정처분·과태료·벌칙',
    keywords: ['과태료', '행정처분', '영업정지', '폐쇄', '개선명령', '경고', '이의', '처분권자', '출입', '음란'],
    content: `
<h3>과태료</h3>
<table>
  <thead><tr><th>금액</th><th>대상</th></tr></thead>
  <tbody>
    <tr><td>300만원 이하</td><td>보고를 하지 않거나 관계공무원의 출입·검사를 거부·방해·기피, 개선명령 위반</td></tr>
    <tr><td>200만원 이하</td><td>위생관리 의무 위반, 영업소 외 장소에서 시술, 위생교육 미이수</td></tr>
  </tbody>
</table>
<ul>
  <li>부과·징수: 출제 당시 시장·군수·구청장. 이후 개정으로 보건복지부장관도 포함</li>
  <li>이의제기: 출제 당시 고지 후 30일 → 현재는 질서위반행위규제법에 따라 <strong>통지를 받은 날부터 60일 이내</strong></li>
</ul>

<h3>행정처분 예시: 음란한 물건 관람·열람·진열·보관</h3>
<table>
  <thead><tr><th>1차</th><th>2차</th><th>3차</th><th>4차</th></tr></thead>
  <tbody>
    <tr><td>경고 (과거 개선명령)</td><td>영업정지 15일</td><td>영업정지 1월</td><td>영업장 폐쇄명령</td></tr>
  </tbody>
</table>

<h3>벌칙</h3>
<table>
  <thead><tr><th>벌칙</th><th>대상</th></tr></thead>
  <tbody>
    <tr><td>1년 이하 징역 또는 1천만원 이하 벌금</td><td>신고 없이 영업, 영업정지·폐쇄명령 위반</td></tr>
    <tr><td>6월 이하 징역 또는 500만원 이하 벌금</td><td>변경신고·지위승계 신고 위반</td></tr>
    <tr><td>300만원 이하 벌금</td><td>면허 없이 업무, 면허 정지 중 업무, 면허증 대여</td></tr>
  </tbody>
</table>
`,
  },
];
