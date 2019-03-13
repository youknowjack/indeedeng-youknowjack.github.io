---
layout: sidebar
title:
exclude_toc: true

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


# Featured Project: Indeed MPH

[Indeed MPH](https://github.com/indeedeng/mph-table/) (Minimal Perfect Hash Tables) provides an immutable key/value store with efficient space utilization and fast reads. To learn more, read [this overview](http://engineering.indeedblog.com/blog/2018/02/indeed-mph/) on our Indeed Engineering blog.

![Random lookup latency in microseconds](http://engineering.indeedblog.com/wp-content/uploads/2018/01/mph3.png)

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

