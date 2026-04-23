# NestJS + Prisma 模块目录与 DTO 初稿

版本：`V1.0`
更新时间：`2026-04-21`
适用范围：简历优化微信小程序主业务后端（`NestJS + Prisma + MySQL`）

---

## 1. 文档目标

本文档用于把当前已经确认的：

- [技术选型与系统方案初稿.md](/Users/liangjiahao/Desktop/VibeCodingLearning/技术选型与系统方案初稿.md)
- [数据库表设计初稿.md](/Users/liangjiahao/Desktop/VibeCodingLearning/数据库表设计初稿.md)
- [接口设计清单初稿.md](/Users/liangjiahao/Desktop/VibeCodingLearning/接口设计清单初稿.md)
- [prisma/schema.prisma](/Users/liangjiahao/Desktop/VibeCodingLearning/prisma/schema.prisma)

进一步落成：

- NestJS 主业务服务目录结构建议
- 模块职责划分
- 模块与 Prisma 模型映射关系
- 第一版 DTO 初稿清单
- 控制器、服务、数据访问层的推荐组织方式

这份文档的定位是：

- **能指导正式开工**
- **但不过早写死全部实现细节**

---

## 2. 设计原则

### 2.1 总体原则

- 采用 `控制器 + 服务 + 数据访问层` 的基础分层
- 采用 `NestJS 模块化` 组织
- Prisma 作为唯一 ORM 入口
- DTO 与 Prisma Model 分离
- 接口输入输出优先围绕业务语义，而不是直接暴露数据库结构
- 第一版不做微服务拆分，保持为一个主业务服务

### 2.2 DTO 设计原则

- 输入类 DTO：
  - `CreateXxxDto`
  - `UpdateXxxDto`
  - `QueryXxxDto`
  - `ActionXxxDto`
- 输出类 DTO：
  - `XxxItemDto`
  - `XxxDetailDto`
  - `XxxResponseDto`
- 路径参数：
  - 可直接用 `@Param('id')`
  - 如后续需要统一校验，可补 `IdParamDto`
- 不建议第一版直接把 Prisma Model 当响应对象返回

### 2.3 Prisma 使用原则

- 所有数据库访问统一经过 Prisma
- 模块内部允许封装 `repository` / `prisma-access` 层
- 少数复杂查询允许使用 Prisma 的原生 SQL 能力
- 不建议在 Controller 中直接调用 Prisma

---

## 3. 推荐目录结构

建议主业务后端仓库结构如下：

```text
src/
  main.ts
  app.module.ts

  config/
    app.config.ts
    env.validation.ts

  prisma/
    prisma.module.ts
    prisma.service.ts

  common/
    constants/
      error-codes.ts
      headers.ts
    decorators/
      current-user.decorator.ts
    dto/
      page-query.dto.ts
      id-response.dto.ts
    enums/
      common.enums.ts
    filters/
      http-exception.filter.ts
    guards/
      jwt-auth.guard.ts
    interceptors/
      response.interceptor.ts
    interfaces/
      jwt-payload.interface.ts
    types/
      api-response.type.ts
    utils/
      date.util.ts
      idempotency.util.ts

  modules/
    auth/
      auth.module.ts
      auth.controller.ts
      auth.service.ts
      auth.repository.ts
      dto/
    user/
      user.module.ts
      user.controller.ts
      user.service.ts
      user.repository.ts
      dto/
    resume/
      resume.module.ts
      resume.controller.ts
      resume.service.ts
      resume.repository.ts
      dto/
    jd/
      jd.module.ts
      jd.controller.ts
      jd.service.ts
      jd.repository.ts
      dto/
    task/
      task.module.ts
      task.controller.ts
      task.service.ts
      task.repository.ts
      dto/
    points/
      points.module.ts
      points.controller.ts
      points.service.ts
      points.repository.ts
      dto/
    reward/
      reward.module.ts
      reward.controller.ts
      reward.service.ts
      reward.repository.ts
      dto/
    membership/
      membership.module.ts
      membership.controller.ts
      membership.service.ts
      membership.repository.ts
      dto/
    payment/
      payment.module.ts
      payment.controller.ts
      payment.service.ts
      payment.repository.ts
      dto/
    file/
      file.module.ts
      file.controller.ts
      file.service.ts
      file.repository.ts
      dto/
    model/
      model.module.ts
      model.controller.ts
      model.service.ts
      model.repository.ts
      dto/
    analytics/
      analytics.module.ts
      analytics.controller.ts
      analytics.service.ts
      analytics.repository.ts
      dto/
```

---

## 4. 模块与 Prisma 模型映射

| 模块 | 主要 Prisma 模型 |
|---|---|
| `auth` | `User`, `UserLoginBinding` |
| `user` | `User`, `UserPointAccount`, `UserMembership` |
| `resume` | `Resume`, `ResumeVersion`, `File`, `FileRelation` |
| `jd` | `JdRecord`, `JdStructure`, `File`, `FileRelation` |
| `task` | `Task`, `TaskStep`, `TaskInput`, `TaskResult`, `TaskResultVersion`, `ModelCallLog` |
| `points` | `UserPointAccount`, `PointTransaction` |
| `reward` | `RewardEvent`, `PointTransaction` |
| `membership` | `MembershipPlan`, `UserMembership` |
| `payment` | `Order`, `PaymentTransaction`, `PointTransaction`, `UserMembership` |
| `file` | `File`, `FileRelation`, `DownloadRecord` |
| `model` | `ModelConfig`, `ModelCallLog` |
| `analytics` | `AnalyticsEvent` |

---

## 5. 模块级设计初稿

## 5.1 `auth` 模块

### 职责

- 微信小程序登录
- 用户注册/登录统一入口
- 绑定 `openid`
- 签发 JWT
- 新用户初始化体验积分

### 推荐接口

- `POST /api/v1/auth/wechat-login`

### 推荐 DTO

#### 输入 DTO

- `WechatLoginDto`
  - `code: string`
  - `nickname?: string`
  - `avatarUrl?: string`

#### 输出 DTO

- `WechatLoginResponseDto`
  - `token: string`
  - `userId: number`
  - `nickname?: string`
  - `avatarUrl?: string`
  - `isNewUser: boolean`
  - `newUserBonusPoints?: number`

### 备注

- `code` 用于换取微信登录态
- 新用户注册送积分的逻辑建议放在 `auth.service` 内完成，但积分流水写入由 `points` 模块协作完成

---

## 5.2 `user` 模块

### 职责

- 获取用户基础信息
- 获取账户概览信息
- 为“我的页面”提供聚合数据

### 推荐接口

- `GET /api/v1/users/me`
- `GET /api/v1/users/me/overview`

### 推荐 DTO

#### 输出 DTO

- `CurrentUserDto`
  - `userId: number`
  - `nickname?: string`
  - `avatarUrl?: string`
  - `status: string`

- `UserOverviewResponseDto`
  - `pointBalance: number`
  - `membershipStatus: string`
  - `membershipExpiredAt?: string`
  - `originalResumeCount: number`
  - `optimizedResumeCount: number`
  - `taskCount: number`

---

## 5.3 `resume` 模块

### 职责

- 原始简历与优化简历管理
- 简历列表、详情、删除
- 支持“选择已有简历继续优化”

### 推荐接口

- `GET /api/v1/resumes`
- `GET /api/v1/resumes/:id`
- `POST /api/v1/resumes/text`
- `POST /api/v1/resumes/word`
- `DELETE /api/v1/resumes/:id`

### 推荐 DTO

#### 输入 DTO

- `ListResumesQueryDto`
  - `keyword?: string`
  - `resumeType?: 'ORIGINAL' | 'OPTIMIZED'`
  - `page?: number`
  - `pageSize?: number`

- `CreateTextResumeDto`
  - `title: string`
  - `contentText: string`

- `CreateWordResumeDto`
  - `title: string`
  - `fileId: number`

#### 输出 DTO

- `ResumeListItemDto`
  - `resumeId: number`
  - `title: string`
  - `resumeType: string`
  - `sourceType: string`
  - `status: string`
  - `createdAt: string`
  - `updatedAt: string`

- `ResumeDetailDto`
  - `resumeId: number`
  - `title: string`
  - `resumeType: string`
  - `sourceType: string`
  - `status: string`
  - `baseResumeId?: number`
  - `currentVersionId?: number`
  - `contentText?: string`
  - `fileId?: number`
  - `createdAt: string`
  - `updatedAt: string`

### 备注

- 上传文件本身由 `file` 模块负责，`resume` 模块负责建立简历记录与版本

---

## 5.4 `jd` 模块

### 职责

- 保存 JD 文本或截图输入记录
- 读取 JD 结构化结果
- 为任务创建提供 JD 引用

### 推荐接口

- `POST /api/v1/jds/text`
- `POST /api/v1/jds/image`
- `GET /api/v1/jds/:id`

### 推荐 DTO

#### 输入 DTO

- `CreateTextJdDto`
  - `rawText: string`

- `CreateImageJdDto`
  - `fileId: number`

#### 输出 DTO

- `JdDetailDto`
  - `jdRecordId: number`
  - `inputType: string`
  - `status: string`
  - `jobTitle?: string`
  - `companyName?: string`
  - `jdSummary?: string`
  - `fullJdText?: string`
  - `retentionExpireAt?: string`

### 备注

- 截图结构化的真正处理由 AI 服务完成，但主业务后端需要先保留 `jd_records`

---

## 5.5 `task` 模块

### 职责

- 创建诊断任务
- 查询任务状态
- 提交补充信息
- 启动优化任务
- 更换模型重跑
- 启动格式对齐任务
- 删除任务记录

### 推荐接口

- `POST /api/v1/tasks/diagnosis`
- `GET /api/v1/tasks/:id`
- `GET /api/v1/tasks/:id/status`
- `POST /api/v1/tasks/:id/supplement`
- `POST /api/v1/tasks/:id/start-optimization`
- `POST /api/v1/tasks/:id/retry-with-model`
- `POST /api/v1/tasks/:id/start-format-alignment`
- `DELETE /api/v1/tasks/:id`

### 推荐 DTO

#### 输入 DTO

- `CreateDiagnosisTaskDto`
  - `jdRecordId: number`
  - `resumeId?: number`
  - `resumeVersionId?: number`
  - `modelConfigId: number`
  - `modelPriorityType: 'SPEED' | 'QUALITY'`
  - `userRequirementText?: string`

- `SubmitSupplementAnswersDto`
  - `answers: SupplementAnswerItemDto[]`

- `SupplementAnswerItemDto`
  - `questionCode: string`
  - `questionTitle: string`
  - `answerText: string`

- `StartOptimizationTaskDto`
  - `baseTaskId: number`
  - `additionalRequirementText?: string`

- `RetryTaskWithModelDto`
  - `modelConfigId: number`
  - `modelPriorityType: 'SPEED' | 'QUALITY'`

- `StartFormatAlignmentTaskDto`
  - `baseTaskId: number`

#### 输出 DTO

- `TaskStatusResponseDto`
  - `taskId: number`
  - `taskType: string`
  - `status: string`
  - `statusMessage?: string`
  - `failureReasonType?: string`
  - `failureReason?: string`
  - `currentStepCode?: string`
  - `currentStepName?: string`
  - `scoreBefore?: number`
  - `scoreAfter?: number`
  - `conclusionLabel?: string`

- `TaskDetailDto`
  - `taskId: number`
  - `taskType: string`
  - `status: string`
  - `modelConfigId?: number`
  - `selectedModelPriorityType?: string`
  - `pointsCost: number`
  - `refundedPoints: number`
  - `sourceResumeId?: number`
  - `sourceResumeVersionId?: number`
  - `sourceJdRecordId?: number`
  - `startedAt?: string`
  - `finishedAt?: string`
  - `steps: TaskStepItemDto[]`
  - `result?: TaskResultSummaryDto`

- `TaskStepItemDto`
  - `stepCode: string`
  - `stepName: string`
  - `stepOrder: number`
  - `status: string`
  - `statusMessage?: string`

- `TaskResultSummaryDto`
  - `resultType: string`
  - `status: string`
  - `scoreBefore?: number`
  - `scoreAfter?: number`
  - `conclusionLabel?: string`
  - `currentVersionId?: number`

---

## 5.6 `points` 模块

### 职责

- 积分账户查询
- 积分流水查询
- 积分充足性校验
- 统一积分加减和流水写入

### 推荐接口

- `GET /api/v1/points/account`
- `GET /api/v1/points/transactions`
- `POST /api/v1/points/check-sufficiency`

### 推荐 DTO

#### 输入 DTO

- `ListPointTransactionsQueryDto`
  - `transactionType?: string`
  - `page?: number`
  - `pageSize?: number`

- `CheckPointSufficiencyDto`
  - `requiredPoints: number`

#### 输出 DTO

- `PointAccountDto`
  - `currentBalance: number`
  - `totalRechargePoints: number`
  - `totalRewardPoints: number`
  - `totalConsumedPoints: number`

- `PointTransactionItemDto`
  - `transactionId: number`
  - `transactionType: string`
  - `changeAmount: number`
  - `balanceAfter: number`
  - `description?: string`
  - `status: string`
  - `createdAt: string`

- `CheckPointSufficiencyResponseDto`
  - `isSufficient: boolean`
  - `requiredPoints: number`
  - `currentBalance: number`
  - `shortagePoints: number`

---

## 5.7 `reward` 模块

### 职责

- 激励视频奖励事件创建与领取
- 奖励积分发放
- 每日次数限制
- 幂等控制

### 推荐接口

- `POST /api/v1/rewards/video/claim`
- `GET /api/v1/rewards/video/rule`

### 推荐 DTO

#### 输入 DTO

- `ClaimVideoRewardDto`
  - `idempotencyKey: string`
  - `watchCompleted: boolean`

#### 输出 DTO

- `ClaimVideoRewardResponseDto`
  - `rewardEventId: number`
  - `rewardPoints: number`
  - `status: string`
  - `currentBalance: number`

- `VideoRewardRuleDto`
  - `rewardPoints: number`
  - `dailyLimit: number`
  - `remainingCount?: number`
  - `description?: string`

---

## 5.8 `membership` 模块

### 职责

- 会员套餐列表
- 当前会员状态
- 会员权益读取

### 推荐接口

- `GET /api/v1/memberships/plans`
- `GET /api/v1/memberships/current`

### 推荐 DTO

#### 输出 DTO

- `MembershipPlanItemDto`
  - `planId: number`
  - `planCode: string`
  - `name: string`
  - `durationType: string`
  - `priceAmount: string`
  - `discountRate: string`
  - `bonusPoints: number`
  - `isVisible: boolean`

- `CurrentMembershipDto`
  - `status: string`
  - `planId?: number`
  - `planName?: string`
  - `startedAt?: string`
  - `expiredAt?: string`

---

## 5.9 `payment` 模块

### 职责

- 创建积分充值订单
- 创建会员订单
- 获取微信支付参数
- 处理支付回调

### 推荐接口

- `POST /api/v1/payments/orders/point-recharge`
- `POST /api/v1/payments/orders/membership`
- `POST /api/v1/payments/:orderId/pay-params`
- `POST /api/v1/payments/wechat/callback`

### 推荐 DTO

#### 输入 DTO

- `CreatePointRechargeOrderDto`
  - `amount: number`

- `CreateMembershipOrderDto`
  - `planId: number`

- `GetWechatPayParamsDto`
  - `orderId: number`

- `WechatPayCallbackDto`
  - 建议保留为原始回调体对象，由 service 内部自行验签和解析

#### 输出 DTO

- `OrderDetailDto`
  - `orderId: number`
  - `orderNo: string`
  - `orderType: string`
  - `status: string`
  - `amount: string`
  - `pointAmount?: number`
  - `bonusPoints: number`
  - `createdAt: string`
  - `paidAt?: string`

- `WechatPayParamsResponseDto`
  - `appId: string`
  - `timeStamp: string`
  - `nonceStr: string`
  - `package: string`
  - `signType: string`
  - `paySign: string`

---

## 5.10 `file` 模块

### 职责

- 文件元数据管理
- JD 截图和 Word 简历上传记录
- 私有文件下载地址生成
- 下载记录写入

### 推荐接口

- `POST /api/v1/files/jd-image`
- `POST /api/v1/files/resume-word`
- `GET /api/v1/files/:id`
- `POST /api/v1/files/:id/download-url`

### 推荐 DTO

#### 输入 DTO

- `CreateJdImageFileDto`
  - `originalName: string`
  - `mimeType?: string`
  - `fileSize: number`
  - `storageKey: string`
  - `storageBucket?: string`

- `CreateResumeWordFileDto`
  - `originalName: string`
  - `mimeType?: string`
  - `fileSize: number`
  - `storageKey: string`
  - `storageBucket?: string`

- `GenerateDownloadUrlDto`
  - `downloadType: 'WORD' | 'PDF'`

#### 输出 DTO

- `FileMetaDto`
  - `fileId: number`
  - `fileType: string`
  - `bizType: string`
  - `originalName: string`
  - `fileSize: number`
  - `status: string`
  - `expiredAt?: string`

- `DownloadUrlResponseDto`
  - `downloadRecordId: number`
  - `fileId: number`
  - `url: string`
  - `expiredAt: string`

---

## 5.11 `model` 模块

### 职责

- 前端模型列表展示
- 速度优先 / 质量优先模型映射
- 模型配置读取

### 推荐接口

- `GET /api/v1/models`

### 推荐 DTO

#### 输出 DTO

- `ModelConfigItemDto`
  - `modelConfigId: number`
  - `modelCode: string`
  - `displayName: string`
  - `priorityType: string`
  - `provider: string`
  - `description?: string`
  - `pointCost: number`
  - `isDefault: boolean`
  - `isVisible: boolean`

---

## 5.12 `analytics` 模块

### 职责

- 前端埋点事件接收
- 落表记录

### 推荐接口

- `POST /api/v1/analytics/events`

### 推荐 DTO

#### 输入 DTO

- `CreateAnalyticsEventDto`
  - `eventCode: string`
  - `eventName: string`
  - `pageCode: string`
  - `payload?: Record<string, any>`

### 备注

- 第一版不建议把埋点 DTO 做得太重

---

## 6. 模块间协作建议

### 6.1 `auth` 与 `points`

- 新用户登录后，如果首次注册：
  - `auth.service` 创建用户
  - `points.service` 初始化积分账户
  - `points.service` 写入 `NEW_USER_BONUS` 流水

### 6.2 `task` 与 `points`

- 点击开始诊断时：
  - `task.service` 负责业务编排
  - `points.service` 扣积分
  - 扣分成功后创建任务
  - 如任务创建失败，必须走补偿返还

### 6.3 `task` 与 `model`

- `task` 只保存任务实际使用的 `modelConfigId`
- `model` 负责前端展示与模型配置读取

### 6.4 `payment` 与 `points` / `membership`

- 积分充值成功：
  - 更新 `Order`
  - 写 `PaymentTransaction`
  - 增加积分流水
- 会员开通成功：
  - 更新 `Order`
  - 写 `PaymentTransaction`
  - 创建或更新 `UserMembership`
  - 写赠送积分流水

### 6.5 `file` 与 `resume` / `jd`

- `file` 只负责文件元数据和下载地址
- `resume` / `jd` 负责业务对象和文件引用关系

---

## 7. 第一版优先实现 DTO 清单

建议第一批优先落地这些 DTO：

- `WechatLoginDto`
- `WechatLoginResponseDto`
- `CreateTextResumeDto`
- `CreateWordResumeDto`
- `CreateTextJdDto`
- `CreateImageJdDto`
- `CreateDiagnosisTaskDto`
- `TaskStatusResponseDto`
- `SubmitSupplementAnswersDto`
- `StartOptimizationTaskDto`
- `RetryTaskWithModelDto`
- `PointAccountDto`
- `CheckPointSufficiencyDto`
- `ClaimVideoRewardDto`
- `CreatePointRechargeOrderDto`
- `CreateMembershipOrderDto`
- `GenerateDownloadUrlDto`
- `ModelConfigItemDto`

---

## 8. 下一步建议

基于这份文档，下一步最适合继续做的是：

1. 直接生成 `NestJS` 主业务服务的**目录骨架**
2. 继续细化第一批 DTO 的**字段校验规则**
3. 继续整理 **Controller 路由草稿**
4. 基于 Prisma Schema，生成第一版 **Repository 方法清单**

当前建议优先级：

**下一步优先建议：生成 `NestJS` 主业务服务目录骨架**
