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
          name: 'Edge',
          value: 2
        },
        {
          name: 'Chrome',
          value: 2
        }
      ]
    },
    {
      name: 'Network Protocol',
      children: [
        {
          name: 'HTTP/1',
          value: 3
        },
        {
          name: 'HTTP/2',
          value: 1
        },
        {
          name: 'HTTP/3',
          value: 1
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
          name: 'AMQP (RabbitMQ)',
          value: 2
        },
        {
          name: 'JSON',
          value: 3
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
          name: 'OpenSearch',
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
          value: 2
        },
        {
          name: 'JVisualVM',
          value: 2
        },
        {
          name: 'Fullstory',
          value: 2
        }
      ]
    },
    {
      name: 'Testing',
      children: [
        {
          name: 'JUnit 5',
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
        },
        {
          name: 'Cypress',
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
          value: 2
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
          value: 2
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
          name: 'Redis',
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
          name: 'Wordpress',
          value: 1
        },
        {
          name: 'Drupal',
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
      name: 'CI/CD',
      children: [
        {
          name: 'Artifactory',
          value: 2
        },
        {
          name: 'Jenkins/Cloudbees',
          value: 2
        },
        {
          name: 'YAML',
          value: 3
        },
        {
          name: 'Docker + Compose',
          value: 3
        },
        {
          name: 'SonarQube',
          value: 3
        },
      ]
    },
    {
      name: "Public Cloud",
      children: [
        {
          name: 'Amazon AWS',
          value: 2
        },
        {
          name: 'Cloudflare',
          value: 2
        },
        {
          name: 'Terraform',
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
      name: 'Business Software',
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
      name: 'Application Performance Monitoring',
      children: [
        {
          name: 'New Relic',
          value: 2
        },
        {
          name: 'Dynatrace',
          value: 2
        }
      ]
    }
  ]
};
