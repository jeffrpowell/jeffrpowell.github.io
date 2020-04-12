export interface TechValue {
  name: string;
  value: number;
}

export interface TechCategory {
  name: string;
  children: TechValue[];
}

export interface KnownTech {
  name: string;
  children: TechCategory[];
}

export const KNOWN_TECH: KnownTech = {
  name: 'Known Tech',
  children: [
    {
      name: 'Language',
      children: [
        {
          name: 'Python',
          value: 2
        },
        {
          name: 'Java',
          value: 3
        },
        {
          name: 'C#',
          value: 1
        },
        {
          name: 'C++',
          value: 1
        },
        {
          name: 'Clojure',
          value: 2
        },
        {
          name: 'HTML5',
          value: 3
        },
        {
          name: 'CSS3',
          value: 3
        },
        {
          name: 'SCSS',
          value: 3
        },
        {
          name: 'LESS',
          value: 3
        },
        {
          name: 'Javascript',
          value: 3
        },
        {
          name: 'SVG',
          value: 2
        },
        {
          name: 'Kotlin',
          value: 1
        }
      ]
    },
    {
      name: 'Browser',
      children: [
        {
          name: 'Firefox',
          value: 3
        },
        {
          name: 'Internet Explorer',
          value: 3
        },
        {
          name: 'Edge',
          value: 3
        },
        {
          name: 'Chrome',
          value: 3
        },
        {
          name: 'Opera',
          value: 1
        }
      ]
    },
    {
      name: 'Network Communication',
      children: [
        {
          name: 'HTTP/1',
          value: 3
        },
        {
          name: 'AJAX',
          value: 3
        },
        {
          name: 'REST',
          value: 3
        },
        {
          name: 'Websocket',
          value: 3
        },
        {
          name: 'RabbitMQ',
          value: 3
        },
        {
          name: 'JSON',
          value: 3
        },
        {
          name: 'Java Jersey2',
          value: 3
        },
        {
          name: 'HATEOAS',
          value: 1
        }
      ]
    },
    {
      name: 'Logging & Telemetry',
      children: [
        {
          name: 'Kibana',
          value: 3
        },
        {
          name: 'Log4j2',
          value: 3
        },
        {
          name: 'Slf4j',
          value: 3
        },
        {
          name: 'Graphite',
          value: 3
        },
        {
          name: 'Grafana',
          value: 3
        },
        {
          name: 'Eclipse Memory Analyzer',
          value: 3
        },
        {
          name: 'JVisualVM',
          value: 3
        }
      ]
    },
    {
      name: 'Testing',
      children: [
        {
          name: 'JUnit',
          value: 3
        },
        {
          name: 'Jasmine',
          value: 3
        },
        {
          name: 'Karma',
          value: 2
        },
        {
          name: 'Mockito',
          value: 3
        },
        {
          name: 'JMeter',
          value: 2
        }
      ]
    },
    {
      name: 'Injection',
      children: [
        {
          name: 'HK2',
          value: 3
        },
        {
          name: 'Guice',
          value: 2
        },
        {
          name: 'Dagger2',
          value: 1
        },
        {
          name: 'Angular DI',
          value: 2
        }
      ]
    },
    {
      name: 'Dependency Management',
      children: [
        {
          name: 'Maven',
          value: 3
        },
        {
          name: 'Gradle',
          value: 1
        },
        {
          name: 'NPM',
          value: 3
        },
        {
          name: 'Yarn',
          value: 1
        },
        {
          name: 'Pip',
          value: 2
        },
        {
          name: 'Leinengen',
          value: 2
        }
      ]
    },
    {
      name: 'Database & Caching',
      children: [
        {
          name: 'MongoDB',
          value: 3
        },
        {
          name: 'SQL Server',
          value: 3
        },
        {
          name: 'MySQL',
          value: 2
        },
        {
          name: 'Memcached',
          value: 2
        },
        {
          name: 'SpringJDBC',
          value: 2
        }
      ]
    },
    {
      name: 'Web Framework',
      children: [
        {
          name: 'Angular',
          value: 2
        },
        {
          name: 'AngularJs',
          value: 2
        },
        {
          name: 'Drupal',
          value: 2
        },
        {
          name: 'React',
          value: 1
        }
      ]
    },
    {
      name: 'Operating System',
      children: [
        {
          name: 'Windows',
          value: 3
        },
        {
          name: 'Linux',
          value: 2
        },
        {
          name: 'Macintosh',
          value: 1
        }
      ]
    },
    {
      name: 'IDE',
      children: [
        {
          name: 'Netbeans',
          value: 3
        },
        {
          name: 'Visual Studio Code',
          value: 3
        },
        {
          name: 'IntelliJ',
          value: 2
        }
      ]
    },
    {
      name: 'System Software',
      children: [
        {
          name: 'Artifactory',
          value: 3
        },
        {
          name: 'Jenkins',
          value: 3
        },
        {
          name: 'YAML',
          value: 3
        },
        {
          name: 'Docker',
          value: 3
        },
        {
          name: 'Kubernetes',
          value: 1
        },
        {
          name: 'Zookeeper',
          value: 2
        }
      ]
    },
    {
      name: 'SCM',
      children: [
        {
          name: 'Git',
          value: 3
        },
        {
          name: 'SVN',
          value: 3
        }
      ]
    },
    {
      name: 'Web Server',
      children: [
        {
          name: 'Nginx',
          value: 3
        },
        {
          name: 'Apache',
          value: 1
        },
        {
          name: 'Tomcat',
          value: 3
        },
        {
          name: 'Jetty',
          value: 2
        }
      ]
    },
    {
      name: 'Auth & Security',
      children: [
        {
          name: 'JWT',
          value: 3
        },
        {
          name: 'SSL',
          value: 2
        },
        {
          name: 'RSA',
          value: 3
        }
      ]
    },
    {
      name: 'Miscellaneous Libraries',
      children: [
        {
          name: 'POI',
          value: 2
        },
        {
          name: 'PDFBox',
          value: 2
        },
        {
          name: 'jQuery',
          value: 3
        },
        {
          name: 'Jackson2',
          value: 3
        }
      ]
    },
    {
      name: 'Business software',
      children: [
        {
          name: 'Zoom',
          value: 3
        },
        {
          name: 'Office365 Suite',
          value: 3
        },
        {
          name: 'Atlassian Suite',
          value: 3
        },
        {
          name: 'Slack',
          value: 1
        }
      ]
    },
    {
      name: 'UI/UX Design',
      children: [
        {
          name: 'Material Design',
          value: 3
        },
        {
          name: 'Bootstrap',
          value: 3
        }
      ]
    },
    {
      name: 'Cloud Providers',
      children: [
        {
          name: 'AWS',
          value: 2
        },
        {
          name: 'Azure',
          value: 1
        }
      ]
    },
    {
      name: 'Mobile Development',
      children: [
        {
          name: 'Cordova',
          value: 1
        },
        {
          name: 'Ionic',
          value: 1
        }
      ]
    }
  ]
};
