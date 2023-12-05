/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  grant_type: 'password' | 'refresh_token';
  username?: string;
  password?: string;
  scope?: string;
  refresh_token?: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  code?: number;
  msg?: string;
  // userId: string | number;
  access_token: string;
  // role: RoleInfo;
  token_type: string;
  scope: string;
  expires_in: string;
  refresh_token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
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
  roles: RoleInfo[];
}
