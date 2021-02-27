## 用法 ##
  
  1. @Component(options:ComponentOptions = {})
    > @Component 装饰器可以接收一个对象作为参数，可以在对象中声明 components ，filters，directives等未提供装饰器的选项，也可以声明computed，watch等

  ```
    import { Vue, Component } from 'vue-property-decorator'

    @Component({
      filters: {
        toFixed: (num: number, fix: number = 2) => {
          return num.toFixed(fix)
        }
      }
    })

    export default class MyComponent extends Vue {
      public list: number[] = [0, 1, 2, 3, 4]
      get evenList() {
        return this.list.filter((item: number) => item % 2 === 0)
      }
    }
  ```

  2. @Prop(options: (PropOptions | Constructor[] | Constructor) = {})
    > @Prop装饰器接收一个参数，这个参数可以有三种写法：
      + Constructor，例如String，Number，Boolean等，指定 prop 的类型；
      + Constructor[]，指定 prop 的可选类型；
      + PropOptions，可以使用以下选项：type，default，required，validator。

  ```
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Componentexport default class MyComponent extends Vue {
      @Prop(String) public propA: string | undefined
      @Prop([String, Number]) public propB!: string | number
      @Prop({
        type: String,
        default: 'abc'
      })
      public propC!: string
    }
  ```

  等同于下面的js写法

  ```
    export default {
      props: {
        propA: {
          type: Number
        },
        propB: {
          default: 'default value'
        },
        propC: {
          type: [String, Boolean]
        }
      }
    }
  ```
  __注意：__

   + 属性的ts类型后面需要加上undefined类型；或者在属性名后面加上!，表示非null 和 非undefined的断言，否则编译器会给出错误提示；

   + 指定默认值必须使用上面例子中的写法，如果直接在属性名后面赋值，会重写这个属性，并且会报错。

  3. @PropSync(propName: string, options: (PropOptions | Constructor[] | Constructor) = {})
     
    > @PropSync装饰器与@prop用法类似，二者的区别在于：
      
      + @PropSync 装饰器接收两个参数：
        propName: string 表示父组件传递过来的属性名；
        options: Constructor | Constructor[] | PropOptions 与@Prop的第一个参数一致；
      + @PropSync 会生成一个新的计算属性。
    
  ```
    import { Vue, Component, PropSync } from 'vue-property-decorator'

    @Component
    export default class MyComponent extends Vue {
      @PropSync('propA', { type: String, default: 'abc' }) public syncedPropA!: string
    }
  ```

  等同于下面的js写法

  ```
    export default {
      props: {
        propA: {
          type: String,
          default: 'abc'
        }
      },
      computed: {
        syncedPropA: {
          get() {
            return this.propA
          },
          set(value) {
            this.$emit('update:propA', value)
          }
        }
      }
    }
  ```

  __注意：__ @PropSync需要配合父组件的.sync修饰符使用


  4. @Watch(path: string, options: WatchOptions = {})
      
      @Watch 装饰器接收两个参数：
        + path: string 被侦听的属性名；
        + options?: WatchOptions={} options可以包含两个属性 ：
            immediate?:boolean 侦听开始之后是否立即调用该回调函数；
            deep?:boolean 被侦听的对象的属性被改变时，是否调用该回调函数；

  侦听开始，发生在beforeCreate勾子之后，created勾子之前

  ```
    import { Vue, Component, Watch } from 'vue-property-decorator'

    @Component
    export default class MyInput extends Vue {
      @Watch('msg')
      public onMsgChanged(newValue: string, oldValue: string) {}

      @Watch('arr', { immediate: true, deep: true })
      public onArrChanged1(newValue: number[], oldValue: number[]) {}

      @Watch('arr')
      public onArrChanged2(newValue: number[], oldValue: number[]) {}
    }
  ```
  等同于下面的js写法

  ```
    export default {
    watch: {
      msg: [
        {
          handler: 'onMsgChanged',
          immediate: false,
          deep: false
        }
      ],
      arr: [
        {
          handler: 'onArrChanged1',
          immediate: true,
          deep: true
        },
        {
          handler: 'onArrChanged2',
          immediate: false,
          deep: false
        }
      ]
    },
    methods: {
      onMsgVhanged(newValue, oldValue) {},
      onArrChange1(newValue, oldValue) {},
      onArrChange2(newValue, oldValue) {}
    }
  }
  ```

  5. @Emit(event?: string)

      + @Emit 装饰器接收一个可选参数，该参数是$Emit的第一个参数，充当事件名。如果没有提供这个参数，$Emit会将回调函数名的camelCase转为kebab-case，并将其作为事件名；
      + @Emit会将回调函数的返回值作为第二个参数，如果返回值是一个Promise对象，$emit会在Promise对象被标记为resolved之后触发；
      + @Emit的回调函数的参数，会放在其返回值之后，一起被$emit当做参数使用。

  ```
    import { Vue, Component, Emit } from 'vue-property-decorator'

    @Component
    export default class MyComponent extends Vue {
      count = 0
      @Emit()
      public addToCount(n: number) {
        this.count += n
      }
      @Emit('reset')
      public resetCount() {
        this.count = 0
      }
      @Emit()
      public returnValue() {
        return 10
      }
      @Emit()
      public onInputChange(e) {
        return e.target.value
      }
      @Emit()
      public promise() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(20)
          }, 0)
        })
      }
    }
  ```

  等同于下面的js写法

  ```
    export default {
      data() {
        return {
          count: 0
        }
      },
      methods: {
        addToCount(n) {
          this.count += n
          this.$emit('add-to-count', n)
        },
        resetCount() {
          this.count = 0
          this.$emit('reset')
        },
        returnValue() {
          this.$emit('return-value', 10)
        },
        onInputChange(e) {
          this.$emit('on-input-change', e.target.value, e)
        },
        promise() {
          const promise = new Promise(resolve => {
            setTimeout(() => {
              resolve(20)
            }, 0)
          })
          promise.then(value => {
            this.$emit('promise', value)
          })
        }
      }
    }
  ```

### 参考 

 [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator).