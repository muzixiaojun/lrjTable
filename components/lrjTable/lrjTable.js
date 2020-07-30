/** slot action 固定按钮操作
 *  btnName 按钮名 
 * valueCallback 按钮返回值
    按钮绑定事件 btnClick

    tr绑定事件 onRowClick
    valueCallback tr返回值

    columns 对象 {
      key: '',
      title: '',
      width: 200,
      fixed: 'left',  //设置fixed 必须设置width
      align: 'center',

      // 按钮默认 slot action
      slot: 'action'
      valueCallback: '',
      btnName: ''
    }
**/
Component({
  options: {
    multipleSlots: true,
  },
  // 自定义外部样式class  th头部样式           tr样式           td样式
  externalClasses: ['thead-row-class', 'tbody-tow-class', 'td-class'],
  properties: {
    // td 数组
    data: {
      type: Array,
      value: []
    },
    // thead 数组
    columns: {
      type: Array,
      value: []
    },
    // table 高度
    height: {
      type: String,
      value: 'auto'
    },
    // table 宽度
    width: {
      type: Number || String,
      value: 750
    },
    // 是否带有纵向边框
    isBorder: {
      type: Boolean,
      value: true
    },
    // 是否带有斑马条纹
    isStripe: {
      type: Boolean,
      value: true
    },
    // tr 返回值Key
    valueCallback: {
      type: String,
      value: ''
    },
    // 无数据时信息
    msg: {
      type: String,
      value: '暂无数据~'
    },
    // thead 固定
    isFixed: {
      type: Boolean,
      value: true
    },
  },
  data: {
    scrolWidth: '100%',
    marginTopValue: 0,
    leftWidth: 0,
    leftIndex: 0,
    rightWidth: 0,
    rightIndex: 0,
  },
  // 生命周期
  lifetimes: {
    // 组件实例进入页面节点树时调用
    attached() {
      const scrolWidth = this.properties.columns.reduce((total, item) => total + item.width, 0)
      this.createSelectorQuery().selectAll(".thead .td").boundingClientRect((res) => {
        if (!isNaN(scrolWidth)) {
          this.properties.columns.map( item => {
            item.width = item.width / scrolWidth * this.properties.width
          })
        } else {
          this.properties.columns.map((item, index) => {
            item.width = res[index].width
          })
        }
      }).exec(res => {
        let list = [], listLeft = [], listRight = [], leftWidth = 0, rightWidth = 0;
        list = this.properties.columns.filter(item => !item.fixed)
        listLeft = this.properties.columns.filter(item => item.fixed == 'left')
        listLeft.map(item => {
          leftWidth += item.width
        })
        listRight = this.properties.columns.filter(item => item.fixed =='right')
        listRight.map(item => {
          rightWidth += item.width
        })
        this.setData({
          columns: [...listLeft, ...list, ...listRight],
          marginTopValue: res[0][0].height,
          leftWidth: leftWidth,
          rightWidth: rightWidth,
          leftIndex: listLeft.length ? listLeft.length : 0,
          rightIndex: listRight.length ?this.properties.columns.length - listRight.length -1 : 0
        })
      })
    },
  },
  methods: {
    onRowClick(e) {
      this.triggerEvent('rowClick', e.target.dataset)
    },
    onBtnClick(e) {
      this.triggerEvent('btnClick', e.target.dataset)
    }
  },
})