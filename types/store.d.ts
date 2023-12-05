import { ErrorTypeEnum } from '@/enums/exceptionEnum';
import { MenuModeEnum, MenuTypeEnum } from '@/enums/menuEnum';
import { RoleInfo } from '@/api/sys/model/userModel';

// Lock screen information
export interface LockInfo {
  // Password required
  pwd?: string | undefined;
  // Is it locked?
  isLock?: boolean;
}

export interface ApiAddress {
  key: string;
  val: string;
}

// Error-log information
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum;
  // Error file
  file: string;
  // Error name
  name?: string;
  // Error message
  message: string;
  // Error stack
  stack?: string;
  // Error detail
  detail: string;
  // Error url
  url: string;
  // Error time
  time?: string;
}

// export interface UserInfo {
//   userId: string | number;
//   username: string;
//   realName: string;
//   avatar: string;
//   desc?: string;
//   homePath?: string;
//   roles: RoleInfo[];
// }
export interface UserInfo {
  ryid: number|string; // 人员id
  dlid: string; // 登录账号(ID)
  rybh: string; // 人员编号（对应职员编码）
  ryxm: string; // 人员姓名
  fjm: string; // 机构分级码
  jgmc: string; // 机构名称
  fjmArr: string[]; // 机构分级码(数组)
  ssbmdm: string; // 所属部门代码
  jgzwdm: string; // 机构职务代码
  jgzw: string; // 机构职务
  xzzwdm: string; // 行政职务代码
  xzzw: string; // 行政职务
  sfz: string; // 身份证
  dh: string; // 电话
  px: number|string; // 排序
  createtime: string; // 创建时间
  updatetime: string; // 更新时间
  sjhm: string; // 手机号
  bmid: number|string; // 部门id
  bmjc: string; // 部门简称
  bmmc: string; // 部门名称
  rylx: string; // 人员类型
  rylxmc: string; // 人员类型名称
  mz: string; // 民族
  mzmc: string; // 民族名称
  jg: string; // 籍贯
  fygzrq: string; // 工作日期
  zt: string; // 是否启用状态
  bz: string; // 备注
  jsmc: string; // 拥有的角色名称
  jsids: number[]|string[]; // 拥有的角色id
  homePath?: string;
  roles: RoleInfo[];
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
