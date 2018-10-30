---
layout: sidebar
title:
exclude_toc: true

---
               

# New on the Blog 
## Improving the Development Process with Metrics-Driven Insights
Read the five-part series on Medium:

[Imhotep: Scalable, Efficient, and Fast](https://medium.com/indeed-engineering/imhotep-scalable-efficient-and-fast-a4e320b87a74). VP of Engineering Jack Humphrey kicks off a 5-part series about improving the development process with metrics-driven insights and Imhotep, our open source data analytics platform. 

[Using Metrics to Improve the Development Process (and Coach People)](https://medium.com/indeed-engineering/using-metrics-to-improve-the-development-process-and-coach-people-70168759a249). We use a measure-question-learn-improve cycle to refine development processes -- We measure everything we can. We learn by asking questions and exploring the data we’ve collected. We use our learnings to try to improve. And we measure continuously to confirm improvement. 

[Metrics-Driven Process Improvement: A Case Study](https://medium.com/indeed-engineering/metrics-driven-process-improvement-a-case-study-b6ed2a2148b1). Insights in practice: How we used Imhotep, our open source data analytics platform to improve translation verification.

[What’s Up, ASF? Using Imhotep to Understand Project Activity](https://medium.com/indeed-engineering/whats-up-asf-using-imhotep-to-understand-project-activity-cdac94e1a68b). Jack uses ASF Jira data to demo the value of analyzing project activity and introduce Imhotep Builder Directory, our new open source Jira Actions builder. 

[The Benefits of Hindsight: A Metrics-Driven Approach to Coaching](https://medium.com/indeed-engineering/the-benefits-of-hindsight-a-metrics-driven-approach-to-coaching-3183fc4d10fe). Hindsight is our powerful internal tool we use to make contributions visible and drive coaching insights. 

---

# Featured Project: Indeed MPH

[Indeed MPH](https://github.com/indeedeng/mph-table/) (Minimal Perfect Hash Tables) provides an immutable key/value store with efficient space utilization and fast reads. To learn more, read [this overview](http://engineering.indeedblog.com/blog/2018/02/indeed-mph/) on our Indeed Engineering blog.

![Random lookup latency in microseconds](http://engineering.indeedblog.com/wp-content/uploads/2018/01/mph3.png)

---

# Featured Project: Proctor

[Proctor](http://opensource.indeedeng.io/proctor/) is an A/B testing framework written in Java that enables data-driven product design.

| | |
| --- | --- |
| [Proctor](https://github.com/indeedeng/proctor) | Indeed's A/B testing framework written in Java |
| [proctor-webapp](https://github.com/indeedeng/proctor-webapp) | Java web application that uses proctor-webapp-library to manipulate and view Proctor definitions |
| [proctor-webapp-library](https://github.com/indeedeng/proctor-webapp-library) | Library used for running a web application to create and modify Proctor definitions |
| [proctor-pipet](https://github.com/indeedeng/proctor-pipet) | Java web application that provides a simple REST API to Proctor |
| [django-proctor](https://github.com/indeedeng/django-proctor) | Python package for your Django web app to use Proctor groups |
| [proctor-sample-matrix](https://github.com/indeedeng/proctor-sample-matrix) | Proctor test definition files and a Maven pom.xml that demonstrates how to use the Maven plugin's generator to build them into a single JSON test matrix file |
| [proctor-demo](https://github.com/indeedeng/proctor-demo) | Reference implementation and demonstration of Proctor |

## Learn More
[Proctor documentation](http://opensource.indeedeng.io/proctor/)

---


# Featured Project: Imhotep
[Imhotep](http://opensource.indeedeng.io/imhotep/) is a highly scalable analytics platform that lets you do the following:

* Perform fast, interactive, ad hoc queries and aggregate results for large datasets
* Combine results from multiple time-series datasets
* Build your own data tools for analysis, monitoring, reporting, and automated data processing on top of the Imhotep platform

The Imhotep suite includes the following components:

| | | 
| ------ | --------- |
| [imhotep](https://github.com/indeedeng/imhotep) | Core Imhotep code |
| [iql](https://github.com/indeedeng/iql) | Web interface for making IQL queries against an Imhotep cluster |
| [iupload](https://github.com/indeedeng/iupload) | TSV uploader webapp for an Imhotep cluster
| [imhotep-tsv-converter](https://github.com/indeedeng/imhotep-tsv-converter) | Tool to convert TSV files into Flamdex indexes for Imhotep |
| [imhotep-cloudformation](https://github.com/indeedeng/imhotep-cloudformation) | Cloudformation scripts and other helper scripts for spinning up an Imhotep cluster in AWS |

## Learn More
[Imhotep documentation](http://opensource.indeedeng.io/imhotep/)

---


# Other Projects

## Java Utilities

| | | 
| ------ | --------- |
| [util-core](https://github.com/indeedeng/util/tree/master/util-core) | General Java utilities and helper classes |
| [util-varexport](https://github.com/indeedeng/util/tree/master/varexport) | Utility that enables you to expose runtime variables from a running Java application |
| [util-urlparsing](https://github.com/indeedeng/util/tree/master/urlparsing) | Utility to efficiently parse key value pairs from query strings in URLs; also includes fast number parsing and url decoding utilities
| [util-compress](https://github.com/indeedeng/util/tree/master/compress) | Utility for compressing and uncompressing data; includes snappy and gzip |
| [util-io](https://github.com/indeedeng/util/tree/master/io) | Utility for performing IO, including many interfaces implemented elsewhere |
| [util-mmap](https://github.com/indeedeng/util/tree/master/mmap) | Utility for performing mmap operations and direct memory access |
| [util-serialization](https://github.com/indeedeng/util/tree/master/serialization) | Utility for serializing and deserializing data to and from binary and string formats |

## Status
[Status](https://github.com/indeedeng/status) is a project to help report the current state of external systems that an application depends on, as well as the current health of any internal aspects of the application.

## LSM Tree
[LSM Tree](https://github.com/indeedeng/lsmtree) is a fast key/value store that is efficient for high-volume random access reads and writes. 

| | |
| --- | --- |
| [lsmtree-core](https://github.com/indeedeng/lsmtree/tree/master/lsmtree-core) | Implementation of a log-structured merge tree |
| [record-log](https://github.com/indeedeng/lsmtree/tree/master/recordlog) | Library for writing data to append-only record logs optimized for replication |
| [recordcache](https://github.com/indeedeng/lsmtree/tree/master/recordcache) | Provides abstractions around writing record logs, building LSM trees, and performing LSM tree lookups |

