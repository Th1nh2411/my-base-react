import {} from './menu';

// endpoint URL
export const getDefaultKakaoDesc = (
  customer_name: string,
  model_name_number: string,
  reservation_date: string,
  return_date: string
) => `안녕하세요 ${customer_name} 님,
‘바로그차’ 예약 30분 전 입니다.

아래의 예약 정보를 확인해주시길 바랍니다.

  • 차량정보
${model_name_number}
  • 예약일자
${reservation_date}
  • 반납일자
${return_date}
  • 장소
서울시 강남구 영동대로 301 코오롱 모터스 BMW 삼성전시상 1F

  • 이용안내
사용 전 차량 사용 매뉴얼을 꼭 시청해주시길 바랍니다. (https://bit.ly/barogcha_manual)
도어 잠금 및 해제는 바로그차앱 스마트키 [메뉴-스마트키]에서만 조작 가능합니다.
반납이 지연될 경우 바로그차앱에서 반납 연장 신청을 해주시길 바라며, 반납 지연 시 패널티 부가됩니다.
예약 취소 시 취소 규정에 따라 수수료가 부가 될 수 있습니다.
회원 본인 또는 등록된 동승자 운행만 가능하며, 이외 보험 적용이 되지 않을 수 있습니다. 
차량 운행 및 시스템 관련 문의 사항은 고객센터(02-6958-7301)로 연락 주시길 바랍니다.`;
// export const URL_BOARD_ADMIN_FOLDER_LIST = 'admin/board/folder'
