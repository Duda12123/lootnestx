# 🎯 LootNest 新奇好物发现策略

## 一、自动化来源（建议按优先级排序）

### 1. TikTok 爬取（最核心）
- **工具**: Apify TikTok Scraper + Zenserp API
- **方法**: 搜索 "#founditonamazon" "#tiktokmademebuyit" "#viraltiktok" 等标签，按点赞量排序
- **频率**: 每天运行一次，筛选最近7天爆火视频
- **成本**: Apify $49/mo 起，TikTok API 免费额度每天100次

### 2. Amazon 趋势监控
- **工具**: Jungle Scout / Helium 10 的"新品趋势"功能
- **方法**: 筛选 Movers & Shakers 榜单 + Most Wished For
- **频率**: 每周检查一次

### 3. Reddit 自动化
- **工具**: Reddit API (免费) + cron job
- **目标子版**: r/INEEEEDIT r/DidntKnowIWantedThat r/shutupandtakemymoney r/gadgets r/AmazonUnder25
- **方法**: 爬取 Top Week/Month 帖子，提取产品名 + 链接
- **成本**: 完全免费

### 4. YouTube 趋势
- **工具**: YouTube Data API (免费每天1万单位)
- **目标**: "Things you didn't know existed" "Cool gadgets" 类视频
- **方法**: 搜索关键词，提取过去24小时内播放量>10万的视频

### 5. Twitter/X 实时监控
- **搜索词**: "this is genius" "where has this been" "link in bio" + "amazon" 组合
- **方法**: Twitter API v2 filtered stream
- **成本**: Free tier 每月1500条推文

## 二、自动化流程设想

```
每天凌晨3点 → 爬取上述所有来源 → AI 筛选 (过滤掉已有评测的)
→ 保留 Top 20 候选 → 自动生成产品简报 → 推送到你手机/邮箱
→ 你挑选今天要评测的 → 一键创建评测草稿
```

## 三、投稿机制（UGC）

- 网站已有 Submit 页面，用户可以提交新品
- 建议增加奖励机制：
  - 被选用的投稿：在评测文章里标注 "Submitted by @xxx"
  - 月度最佳投稿：赠送评测产品
  - 定期评选 "社区发现官" 称号

## 四、竞品监控

### 参考对标站（学他们怎么做的）
| 网站 | 类型 | 参考价值 |
|------|------|---------|
| Uncrate.com | 高端生活方式 | 图片排版一流 |
| CoolMaterial.com | 大众奇趣 | 选题标准值得学 |
| TheGrommet.com | 创新产品发现 | 投稿机制做得好 |
| TrendHunter.com | 趋势分析 | 自动发现很成熟 |
| OddityMall.com | 奇葩商品 | 内容风格可以参考 |

### 差异化策略
1. **视频为主** → 其他站多为图文，你有短视频优势
2. **真诚评测** → 不是每样都说好，优缺点都提
3. **"不值得买"系列** → 反向评测爆火物品（别人不做的内容）

## 五、立即可用的低成本方案

### Level 1（现在就能做）
1. 每天手动刷 TikTok #tiktokmademebuyit 30分钟
2. 每周刷 r/INEEEEDIT 收集新品
3. Amazon Movers & Shakers 每周检查
4. 用 Notion/Airtable 建产品数据库

### Level 2（网站有一定流量后）
1. 部署 Apify TikTok Scraper Actor
2. 搭建简单的自动化邮件简报系统
3. 建立 Discord 社区收集用户投稿

### Level 3（规模化运营）
1. 全自动爬取 + AI 筛选 + 自动生成草稿
2. 多平台同时分发内容
3. 培养写手团队