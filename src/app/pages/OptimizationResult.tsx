import { useState } from 'react';
import { ArrowLeft, Download, RefreshCw, Eye, Sparkles, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';

export function OptimizationResult() {
  const navigate = useNavigate();
  const [additionalRequirement, setAdditionalRequirement] = useState('');
  const [showFullPreview, setShowFullPreview] = useState(false);

  // 匹配度数据
  const matchScores = {
    before: 72,
    after: 88,
    improvement: 16
  };

  const changes = [
    {
      section: '工作经历',
      items: [
        { before: '负责产品设计', after: '主导核心产品模块设计，用户满意度提升40%' },
        { before: '完成需求分析', after: '负责200+需求的分析与评审，需求实现率达95%' },
      ]
    },
    {
      section: '项目经历',
      items: [
        { before: '参与电商系统开发', after: '主导电商平台重构项目，使页面加载速度提升60%，转化率提高25%' },
      ]
    },
    {
      section: '技能总结',
      items: [
        { before: '熟悉前端开发', after: '精通React、TypeScript等现代前端技术栈，有丰富的组件库开发经验' },
      ]
    },
  ];

  // 完整简历预览内容
  const optimizedResume = {
    basic: {
      name: '张三',
      title: '高级产品经理',
      contact: '手机：138****8888 | 邮箱：zhangsan@example.com',
      summary: '8年互联网产品经验，擅长B端SaaS产品规划与设计，具备完整的产品从0到1及规模化能力。曾主导多个千万级用户产品，在用户增长、数据分析、团队管理方面有丰富实践经验。'
    },
    experience: [
      {
        company: '字节跳动',
        position: '高级产品经理',
        period: '2022.03 - 至今',
        items: [
          '主导核心产品模块设计，通过深度用户研究和数据分析，优化产品体验，用户满意度提升40%，NPS从45提升至63',
          '负责200+需求的分析与评审，建立完善的需求评审流程和优先级排序机制，需求实现率达95%，交付周期缩短30%',
          '带领8人产品团队，完成3个重点项目的规划与落地，实现月活用户从500万增长至1200万',
          '推动B端SaaS产品商业化进程，设计分级定价体系，首年实现GMV 5000万+'
        ]
      },
      {
        company: '腾讯',
        position: '产品经理',
        period: '2019.06 - 2022.02',
        items: [
          '负责企业协作产品核心功能设计，主导即时通讯、文档协作等模块的产品规划，服务企业客户超10万家',
          '通过A/B测试和用户访谈，持续优化产品功能，核心功能使用率提升55%，用户留存率提高至78%',
          '协调研发、设计、运营等多部门资源，按时交付6个重大版本，零重大线上事故',
          '建立数据驱动的决策机制，搭建完整的产品数据指标体系和分析看板'
        ]
      },
      {
        company: '美团',
        position: '初级产品经理',
        period: '2017.07 - 2019.05',
        items: [
          '参与外卖配送系统优化项目，通过算法优化和流程改进，配送效率提升20%',
          '负责商家端后台功能设计，完成30+功能模块的需求分析和原型设计',
          '协助产品总监完成竞品分析和市场调研，输出15份专业分析报告'
        ]
      }
    ],
    projects: [
      {
        name: 'B端SaaS协作平台',
        role: '产品负责人',
        period: '2022.03 - 2023.08',
        description: '主导企业级协作平台从0到1构建，覆盖文档协作、项目管理、团队沟通等核心场景',
        items: [
          '完成产品定位和核心功能规划，通过MVP验证商业模式，首年签约企业客户800+',
          '设计分层架构的产品体系，满足不同规模企业的差异化需求',
          '建立产品数据指标体系，通过数据分析驱动产品迭代，核心功能留存率达85%',
          '推动产品商业化，设计三级定价体系（基础版/专业版/企业版），实现ARR 3000万+'
        ]
      },
      {
        name: '电商平台重构项目',
        role: '核心成员',
        period: '2020.01 - 2021.06',
        description: '负责电商平台前端架构重构，提升系统性能和用户体验',
        items: [
          '主导前端技术选型和架构设计，采用React+TypeScript技术栈，构建组件化开发体系',
          '优化页面加载性能，首屏加载时间从3.5s降至1.2s，页面加载速度提升60%',
          '改进购物流程体验，简化下单步骤，转化率提高25%，购物车放弃率降低18%',
          '建立前端监控体系，实现性能实时监控和问题快速定位'
        ]
      }
    ],
    education: [
      {
        school: '清华大学',
        major: '计算机科学与技术',
        degree: '本科',
        period: '2013.09 - 2017.06',
        note: 'GPA: 3.8/4.0 | 连续三年获得校级奖学金'
      }
    ],
    skills: [
      '产品能力：精通产品全生命周期管理，具备从0到1及规模化产品经验，擅长B端SaaS产品设计',
      '数据分析：熟练使用SQL、Python进行数据分析，擅长A/B测试、漏斗分析、用户画像等方法',
      '技术理解：精通React、TypeScript等现代前端技术栈，有丰富的组件库开发经验，能与研发深度协作',
      '项目管理：熟练使用Scrum、看板等敏捷开发方法，擅长跨部门协作和资源协调',
      '工具软件：Axure、Figma、Sketch、Jira、Confluence等专业工具'
    ]
  };

  const handleConfirm = () => {
    navigate('/format');
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] pb-32">
      <StatusBar />
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-11 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/report" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">优化结果确认</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* Success Message */}
        <div className="bg-gradient-to-br from-[#07C160] to-[#05a350] rounded-xl p-6 text-white text-center shadow-lg">
          <Sparkles className="w-12 h-12 mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">优化完成！</h2>
          <p className="text-white/90 text-sm">请仔细查看优化内容，确认无误后可导出使用</p>
        </div>

        {/* Match Score Comparison */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#07C160]" />
            <h3 className="font-semibold text-gray-900">匹配度提升</h3>
          </div>

          <div className="flex items-center justify-between gap-4">
            {/* Before Score */}
            <div className="flex-1">
              <div className="text-center mb-2">
                <div className="text-xs text-gray-500 mb-1">优化前</div>
                <div className="text-3xl font-bold text-gray-600">{matchScores.before}</div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-400 transition-all duration-500"
                  style={{ width: `${matchScores.before}%` }}
                ></div>
              </div>
            </div>

            {/* Arrow & Improvement */}
            <div className="flex flex-col items-center px-4">
              <svg className="w-8 h-8 text-[#07C160]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="mt-2 px-2 py-1 bg-[#07C160]/10 rounded-full">
                <span className="text-xs font-semibold text-[#07C160]">+{matchScores.improvement}</span>
              </div>
            </div>

            {/* After Score */}
            <div className="flex-1">
              <div className="text-center mb-2">
                <div className="text-xs text-gray-500 mb-1">优化后</div>
                <div className="text-3xl font-bold text-[#07C160]">{matchScores.after}</div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#07C160] transition-all duration-500"
                  style={{ width: `${matchScores.after}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Result Label */}
          <div className="mt-4 flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#07C160]/5 to-blue-50 rounded-lg">
            <svg className="w-5 h-5 text-[#07C160]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-[#07C160]">可投递</span>
            <span className="text-xs text-gray-600">· 简历已显著优化，建议投递</span>
          </div>
        </div>

        {/* Full Preview Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => setShowFullPreview(!showFullPreview)}
            className="w-full flex items-center justify-between p-4 active:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-[#07C160]" />
              <span className="font-semibold text-gray-900">完整简历预览</span>
            </div>
            {showFullPreview ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {showFullPreview && (
            <div className="border-t border-gray-100 p-5 bg-[#f7f8fa]">
              {/* Basic Info */}
              <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{optimizedResume.basic.name}</h2>
                <div className="text-base text-gray-700 font-medium mb-2">{optimizedResume.basic.title}</div>
                <div className="text-sm text-gray-600 mb-3">{optimizedResume.basic.contact}</div>
                <div className="h-px bg-gray-200 my-3"></div>
                <p className="text-sm text-gray-700 leading-relaxed">{optimizedResume.basic.summary}</p>
              </div>

              {/* Work Experience */}
              <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#07C160] rounded"></div>
                  工作经历
                </h3>
                <div className="space-y-5">
                  {optimizedResume.experience.map((exp, idx) => (
                    <div key={idx} className={idx !== 0 ? 'pt-5 border-t border-gray-100' : ''}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">{exp.company}</div>
                          <div className="text-sm text-gray-600 mt-0.5">{exp.position}</div>
                        </div>
                        <div className="text-xs text-gray-500 flex-shrink-0 ml-4">{exp.period}</div>
                      </div>
                      <ul className="space-y-2 mt-3">
                        {exp.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                            <span className="text-[#07C160] flex-shrink-0 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Experience */}
              <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#07C160] rounded"></div>
                  项目经历
                </h3>
                <div className="space-y-5">
                  {optimizedResume.projects.map((proj, idx) => (
                    <div key={idx} className={idx !== 0 ? 'pt-5 border-t border-gray-100' : ''}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">{proj.name}</div>
                          <div className="text-sm text-gray-600 mt-0.5">{proj.role}</div>
                        </div>
                        <div className="text-xs text-gray-500 flex-shrink-0 ml-4">{proj.period}</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 mb-3">{proj.description}</p>
                      <ul className="space-y-2">
                        {proj.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                            <span className="text-[#07C160] flex-shrink-0 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#07C160] rounded"></div>
                  教育背景
                </h3>
                <div className="space-y-4">
                  {optimizedResume.education.map((edu, idx) => (
                    <div key={idx}>
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <div className="font-semibold text-gray-900">{edu.school}</div>
                          <div className="text-sm text-gray-600 mt-0.5">{edu.major} · {edu.degree}</div>
                        </div>
                        <div className="text-xs text-gray-500 flex-shrink-0 ml-4">{edu.period}</div>
                      </div>
                      {edu.note && (
                        <p className="text-sm text-gray-600 mt-2">{edu.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#07C160] rounded"></div>
                  技能总结
                </h3>
                <ul className="space-y-2">
                  {optimizedResume.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                      <span className="text-[#07C160] flex-shrink-0 mt-1.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/resume/view/1?tab=diff"
            className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 border border-gray-200 active:bg-gray-50 shadow-sm"
          >
            <RefreshCw className="w-6 h-6 text-[#07C160]" />
            <span className="text-sm font-medium text-gray-900">查看差异对比</span>
          </Link>
          <button className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 border border-gray-200 active:bg-gray-50 shadow-sm">
            <Download className="w-6 h-6 text-[#07C160]" />
            <span className="text-sm font-medium text-gray-900">立即导出</span>
          </button>
        </div>

        {/* Key Changes */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#07C160] rounded" />
            重点优化内容
          </h3>

          <div className="space-y-5">
            {changes.map((change, idx) => (
              <div key={idx}>
                <div className="text-sm font-medium text-gray-900 mb-3">{change.section}</div>
                <div className="space-y-3">
                  {change.items.map((item, i) => (
                    <div key={i} className="bg-[#f7f8fa] rounded-lg p-3 border border-gray-100">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-xs text-gray-500 flex-shrink-0">优化前:</span>
                        <p className="text-xs text-gray-600 flex-1 line-through">{item.before}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs text-[#07C160] flex-shrink-0 font-medium">优化后:</span>
                        <p className="text-xs text-gray-900 flex-1 font-medium">{item.after}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">需要进一步调整？</h3>
          <p className="text-xs text-gray-600 mb-3">如果您有新的优化要求，可以在下方输入（将重新消耗积分）</p>

          <textarea
            value={additionalRequirement}
            onChange={(e) => setAdditionalRequirement(e.target.value)}
            placeholder="例如：进一步突出管理能力..."
            className="w-full h-24 p-3 bg-[#f7f8fa] border border-gray-200 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[#07C160] focus:border-transparent mb-3"
          />

          <button
            disabled={!additionalRequirement}
            className="w-full bg-[#07C160] text-white py-2.5 rounded-lg font-medium text-sm disabled:bg-gray-300 disabled:text-gray-500"
          >
            重新生成（消耗50积分）
          </button>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <button
          onClick={handleConfirm}
          className="w-full bg-[#07C160] text-white py-3 rounded-lg font-medium mb-2"
        >
          确认并进行格式对齐
        </button>
        <p className="text-center text-xs text-gray-500">
          或直接导出使用，稍后可在简历列表进行格式对齐
        </p>
      </div>
    </div>
  );
}
