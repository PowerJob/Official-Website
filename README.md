<p align="center">
<img src="https://raw.githubusercontent.com/KFCFans/PowerJob/master/others/images/logo.png" alt="PowerJob" title="PowerJob" width="557"/>
</p>

<p align="center">
<a href="https://github.com/PowerJob/PowerJob/actions"><img src="https://github.com/PowerJob/PowerJob/workflows/Java%20CI%20with%20Maven/badge.svg?branch=master" alt="actions"></a>
<a href="https://search.maven.org/search?q=tech.powerjob"><img alt="Maven Central" src="https://img.shields.io/maven-central/v/tech.powerjob/powerjob-worker"></a>
<a href="https://github.com/PowerJob/PowerJob/releases"><img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/kfcfans/powerjob?color=%23E59866"></a>
<a href="https://github.com/PowerJob/PowerJob/blob/master/LICENSE"><img src="https://img.shields.io/github/license/KFCFans/PowerJob" alt="LICENSE"></a>
</p>

### Official-Website
PowerJob官网页面前端，官网地址为http://www.powerjob.tech/

# 简介
### 主要特性
* 使用简单：提供前端Web界面，允许开发者可视化地完成调度任务的管理（增、删、改、查）、任务运行状态监控和运行日志查看等功能。
* 定时策略完善：支持CRON表达式、固定频率、固定延迟和API四种定时调度策略。
* 执行模式丰富：支持单机、广播、Map、MapReduce四种执行模式，其中Map/MapReduce处理器能使开发者寥寥数行代码便获得集群分布式计算的能力。
* DAG工作流支持：支持在线配置任务依赖关系，可视化得对任务进行编排，同时还支持上下游任务间的数据传递
* 执行器支持广泛：支持Spring Bean、内置/外置Java类、Shell、Python等处理器，应用范围广。
* 运维便捷：支持在线日志功能，执行器产生的日志可以在前端控制台页面实时显示，降低debug成本，极大地提高开发效率。
* 依赖精简：最小仅依赖关系型数据库（MySQL/Oracle/MS SQLServer...），扩展依赖为MongoDB（用于存储庞大的在线日志）。
* 高可用&高性能：调度服务器经过精心设计，一改其他调度框架基于数据库锁的策略，实现了无锁化调度。部署多个调度服务器可以同时实现高可用和性能的提升（支持无限的水平扩展）。
* 故障转移与恢复：任务执行失败后，可根据配置的重试策略完成重试，只要执行器集群有足够的计算节点，任务就能顺利完成。

### 适用场景
* 有定时执行需求的业务场景：如每天凌晨全量同步数据、生成业务报表等。
* 有需要全部机器一同执行的业务场景：如使用广播执行模式清理集群日志。
* 有需要分布式处理的业务场景：比如需要更新一大批数据，单机执行耗时非常长，可以使用Map/MapReduce处理器完成任务的分发，调动整个集群加速计算。
* 有需要延迟执行某些任务的业务场景：比如订单过期处理等。

### 设计目标
PowerJob 的设计目标为企业级的分布式任务调度平台，即成为公司内部的**任务调度中间件**。整个公司统一部署调度中心 powerjob-server，旗下所有业务线应用只需要依赖 `powerjob-worker` 即可接入调度中心获取任务调度与分布式计算能力。

### 在线试用
试用地址：[try.powerjob.tech](http://try.powerjob.tech/)
试用应用名称：powerjob-agent-test
控制台密码：123

[建议点击查看试用文档了解相关操作](https://www.yuque.com/powerjob/guidence/hnbskn)
