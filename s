[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex f1be408..06a8133 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -1,8 +1,21537 @@[m
 {[m
   "name": "ieee-cs",[m
   "version": "0.1.0",[m
[31m-  "lockfileVersion": 1,[m
[32m+[m[32m  "lockfileVersion": 2,[m
   "requires": true,[m
[32m+[m[32m  "packages": {[m
[32m+[m[32m    "": {[m
[32m+[m[32m      "name": "ieee-cs",[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@testing-library/jest-dom": "^5.14.1",[m
[32m+[m[32m        "@testing-library/react": "^11.2.7",[m
[32m+[m[32m        "@testing-library/user-event": "^12.8.3",[m
[32m+[m[32m        "react": "^17.0.2",[m
[32m+[m[32m        "react-dom": "^17.0.2",[m
[32m+[m[32m        "react-router-dom": "^5.3.0",[m
[32m+[m[32m        "react-scripts": "4.0.3",[m
[32m+[m[32m        "web-vitals": "^1.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/code-frame": {[m
[32m+[m[32m      "version": "7.15.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.15.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-2IAnmn8zbvC/jKYhq5Ki9I+DwjlrtMPUCH/CpHvqI4dNnlwHwsxoIhlc8WcYY5LSYknXQtAlFYuHfqAFCvQ4Wg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/highlight": "^7.14.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/compat-data": {[m
[32m+[m[32m      "version": "7.15.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.15.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-0NqAC1IJE0S0+lL1SWFMxMkz1pKCNCjI4tr2Zx4LJSXxCLAdr6KyArnY+sno5m3yH9g737ygOyPABDsnXkpxiA==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/core": {[m
[32m+[m[32m      "version": "7.15.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.15.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-3UG9dsxvYBMYwRv+gS41WKHno4K60/9GPy1CJaH6xy3Elq8CTtvtjT5R5jmNhXfCYLX2mTw+7/aq5ak/gOE0og==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/code-frame": "^7.15.8",[m
[32m+[m[32m        "@babel/generator": "^7.15.8",[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-module-transforms": "^7.15.8",[m
[32m+[m[32m        "@babel/helpers": "^7.15.4",[m
[32m+[m[32m        "@babel/parser": "^7.15.8",[m
[32m+[m[32m        "@babel/template": "^7.15.4",[m
[32m+[m[32m        "@babel/traverse": "^7.15.4",[m
[32m+[m[32m        "@babel/types": "^7.15.6",[m
[32m+[m[32m        "convert-source-map": "^1.7.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "gensync": "^1.0.0-beta.2",[m
[32m+[m[32m        "json5": "^2.1.2",[m
[32m+[m[32m        "semver": "^6.3.0",[m
[32m+[m[32m        "source-map": "^0.5.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/babel"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/core/node_modules/semver": {[m
[32m+[m[32m      "version": "6.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "semver": "bin/semver.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/generator": {[m
[32m+[m[32m      "version": "7.15.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.15.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-ECmAKstXbp1cvpTTZciZCgfOt6iN64lR0d+euv3UZisU5awfRawOvg07Utn/qBGuH4bRIEZKrA/4LzZyXhZr8g==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.6",[m
[32m+[m[32m        "jsesc": "^2.5.1",[m
[32m+[m[32m        "source-map": "^0.5.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-annotate-as-pure": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-QwrtdNvUNsPCj2lfNQacsGSQvGX8ee1ttrBrcozUP2Sv/jylewBP/8QFe6ZkBsC8T/GYWonNAWJV4aRR9AL2DA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-P8o7JP2Mzi0SdC6eWr1zF+AEYvrsZa7GSY1lTayjF5XJhVH0kjLYUZPvTMflP7tBgZoe9gIhTa60QwFpqh/E0Q==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-explode-assignable-expression": "^7.15.4",[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-compilation-targets": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-rMWPCirulnPSe4d+gwdWXLfAXTTBj8M3guAf5xFQJ0nvFY7tfNAFnWdqaHegHlgDZOCT4qvhF3BYlSJag8yhqQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/compat-data": "^7.15.0",[m
[32m+[m[32m        "@babel/helper-validator-option": "^7.14.5",[m
[32m+[m[32m        "browserslist": "^4.16.6",[m
[32m+[m[32m        "semver": "^6.3.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {[m
[32m+[m[32m      "version": "6.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "semver": "bin/semver.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-create-class-features-plugin": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-7ZmzFi+DwJx6A7mHRwbuucEYpyBwmh2Ca0RvI6z2+WLZYCqV0JOaLb+u0zbtmDicebgKBZgqbYfLaKNqSgv5Pw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-function-name": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-member-expression-to-functions": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-optimise-call-expression": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-replace-supers": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-create-regexp-features-plugin": {[m
[32m+[m[32m      "version": "7.14.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.14.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-TLawwqpOErY2HhWbGJ2nZT5wSkR192QpN+nBg1THfBfftrlvOh+WbhrxXCH4q4xJ9Gl16BGPR/48JA+Ryiho/A==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.14.5",[m
[32m+[m[32m        "regexpu-core": "^4.7.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-define-polyfill-provider": {[m
[32m+[m[32m      "version": "0.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-RH3QDAfRMzj7+0Nqu5oqgO5q9mFtQEVvCRsi8qCEfzLR9p2BHfn5FzhSB2oj1fF7I2+DcTORkYaQ6aTR9Cofew==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.13.0",[m
[32m+[m[32m        "@babel/helper-module-imports": "^7.12.13",[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.13.0",[m
[32m+[m[32m        "@babel/traverse": "^7.13.0",[m
[32m+[m[32m        "debug": "^4.1.1",[m
[32m+[m[32m        "lodash.debounce": "^4.0.8",[m
[32m+[m[32m        "resolve": "^1.14.2",[m
[32m+[m[32m        "semver": "^6.1.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "@babel/core": "^7.4.0-0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-define-polyfill-provider/node_modules/semver": {[m
[32m+[m[32m      "version": "6.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",[m
[32m+[m[32m      "bin": {[m
[32m+[m[32m        "semver": "bin/semver.js"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-explode-assignable-expression": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-J14f/vq8+hdC2KoWLIQSsGrC9EFBKE4NFts8pfMpymfApds+fPqR30AOUWc4tyr56h9l/GA1Sxv2q3dLZWbQ/g==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-function-name": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-Z91cOMM4DseLIGOnog+Z8OI6YseR9bua+HpvLAQ2XayUGU+neTtX+97caALaLdyu53I/fjhbeCnWnRH1O3jFOw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-get-function-arity": "^7.15.4",[m
[32m+[m[32m        "@babel/template": "^7.15.4",[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-get-function-arity": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-1/AlxSF92CmGZzHnC515hm4SirTxtpDnLEJ0UyEMgTMZN+6bxXKg04dKhiRx5Enel+SUA1G1t5Ed/yQia0efrA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-hoist-variables": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-VTy085egb3jUGVK9ycIxQiPbquesq0HUQ+tPO0uv5mPEBZipk+5FkRKiWq5apuyTE9FUrjENB0rCf8y+n+UuhA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-member-expression-to-functions": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-cokOMkxC/BTyNP1AlY25HuBWM32iCEsLPI4BHDpJCHHm1FU2E7dKWWIXJgQgSFiu4lp8q3bL1BIKwqkSUviqtA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-imports": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-jeAHZbzUwdW/xHgHQ3QmWR4Jg6j15q4w/gCfwZvtqOxoo5DKtLHk8Bsf4c5RZRC7NmLEs+ohkdq8jFefuvIxAA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-module-transforms": {[m
[32m+[m[32m      "version": "7.15.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.15.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-DfAfA6PfpG8t4S6npwzLvTUpp0sS7JrcuaMiy1Y5645laRJIp/LiLGIBbQKaXSInK8tiGNI7FL7L8UvB8gdUZg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-module-imports": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-replace-supers": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-simple-access": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.15.7",[m
[32m+[m[32m        "@babel/template": "^7.15.4",[m
[32m+[m[32m        "@babel/traverse": "^7.15.4",[m
[32m+[m[32m        "@babel/types": "^7.15.6"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-optimise-call-expression": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-E/z9rfbAOt1vDW1DR7k4SzhzotVV5+qMciWV6LaG1g4jeFrkDlJedjtV4h0i4Q/ITnUu+Pk08M7fczsB9GXBDw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-plugin-utils": {[m
[32m+[m[32m      "version": "7.14.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.14.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-/37qQCE3K0vvZKwoK4XU/irIJQdIfCJuhU5eKnNxpFDsOkgFaUAwbv+RYw6eYgsC0E4hS7r5KqGULUogqui0fQ==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-remap-async-to-generator": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-v53MxgvMK/HCwckJ1bZrq6dNKlmwlyRNYM6ypaRTdXWGOE2c1/SCa6dL/HimhPulGhZKw9W0QhREM583F/t0vQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-wrap-function": "^7.15.4",[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-replace-supers": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-/ztT6khaXF37MS47fufrKvIsiQkx1LBRvSJNzRqmbyeZnTwU9qBxXYLaaT/6KaxfKhjs2Wy8kG8ZdsFUuWBjzw==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/helper-member-expression-to-functions": "^7.15.4",[m
[32m+[m[32m        "@babel/helper-optimise-call-expression": "^7.15.4",[m
[32m+[m[32m        "@babel/traverse": "^7.15.4",[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-simple-access": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-UzazrDoIVOZZcTeHHEPYrr1MvTR/K+wgLg6MY6e1CJyaRhbibftF6fR2KU2sFRtI/nERUZR9fBd6aKgBlIBaPg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.15.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-BMRLsdh+D1/aap19TycS4eD1qELGrCBJwzaY9IE8LrpJtJb+H7rQkPIdsfgnMtLBA6DJls7X9z93Z4U8h7xw0A==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@babel/types": "^7.15.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@babel/helper-split-export-declaration": {[m
[32m+[m[32m      "version": "7.15.4",[m
[32m+[m[32m      