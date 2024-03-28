import localeLogin from '@/views/login/locale/vi';
import localeSysMenu from '@/views/admin/menu/locale/vi';
import localeWorkplace from '@/views/dashboard/workplace/locale/vi';
import localeLogLogin from '@/views/log/login/locale/vi';
import localeIconPicker from '@/components/icon-picker/locale/vi';
import localeLogOpera from '@/views/log/opera/locale/vi';
import localeSysDept from '@/views/admin/dept/locale/vi';
import localeSysApi from '@/views/admin/api/locale/vi';
import localeServerMonitor from '@/views/monitor/server/locale/vi';
import localeRedisMonitor from '@/views/monitor/redis/locale/vi';
import localeSysUser from '@/views/admin/user/locale/vi';
import localeSysRole from '@/views/admin/role/locale/vi';
import localeSettings from './vi/settings';

export default {
  'menu.dashboard': 'Bảng điều khiển',
  'menu.server.dashboard': 'Bảng điều khiển - Máy chủ',
  'menu.server.workplace': 'Nơi làm việc - Máy chủ',
  'menu.system': 'Quản lý hệ thống',
  'menu.log': 'Nhật ký',
  'menu.monitor': 'Giám sát hệ thống',
  'menu.server.monitor': 'Giám sát thời gian thực - Máy chủ',
  'menu.list': 'Trang danh sách',
  'menu.result': 'Trang kết quả',
  'menu.exception': 'Trang ngoại lệ',
  'menu.form': 'Trang biểu mẫu',
  'menu.profile': 'Trang hồ sơ',
  'menu.visualization': 'Trực quan hóa dữ liệu',
  'menu.user': 'Trung tâm cá nhân',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'Câu hỏi thường gặp',
  'navbar.docs': 'Trung tâm tài liệu',
  'navbar.action.locale': 'Chuyển sang tiếng Việt',
  'modal.title.tips': 'Lời nhắc',
  'modal.title.tips.delete': 'Bạn có chắc muốn xóa không?',
  'switch.open': 'Mở',
  'switch.close': 'Đóng',
  'submit.create.success': 'Tạo thành công',
  'submit.update.success': 'Cập nhật thành công',
  'submit.delete.success': 'Xóa thành công',
  ...localeSettings,
  ...localeLogin,
  ...localeWorkplace,
  ...localeLogLogin,
  ...localeSysMenu,
  ...localeIconPicker,
  ...localeLogOpera,
  ...localeSysDept,
  ...localeSysApi,
  ...localeServerMonitor,
  ...localeRedisMonitor,
  ...localeSysUser,
  ...localeSysRole,
};
