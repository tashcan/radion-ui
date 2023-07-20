<script lang="ts">
  import {
    Slider,
    TextInput,
    NumberInput,
    Dropdown,
    Button,
    Pagination,
    Listbox,
    Checkbox,
	  Table,
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardContent,

	  RadioGroup,
    Switch
  } from '@radion/ui';

  import { Icon } from '@steeze-ui/svelte-icon';

  import {
    AdjustmentsVertical,
    Beaker,
    AtSymbol,
    ChatBubbleOvalLeftEllipsis
  } from '@steeze-ui/heroicons';

  export let testText = '123';
  let sliderValue = 1;
  let sliderValue2 = 1;
  let sliderValue3 = 1;
  let sliderValueRange = [1, 15];
  let numberValue = 10;

  let checked = true;

  let tableFilter = '';

  let listboxValue: any;
  let dropdownValue: any;

  let tableHeaders = [
    {
      text: 'Hi',
      value: 'col1',
    },
    {
      text: 'A bit more',
      value: 'col2',
    },
    {
      text: 'What is even happening',
      value: 'col3',
    },
    {
      text: 'This is some super long text or something',
      value: 'col4',
    }
  ];

  let tableItems = [
  {
    id: 1,
    col1: 'Magic',
    col2: 'Longer Magic',
    col3: 'Intense fucking Magic',
    col4: 'Actually Intense fucking Magic',
  },
  {
    id: 2,
    col1: 'All the shit',
    col2: 'Longer Magic',
    col3: 'Actually Intense fucking Magic',
    col4: 'Longer Magic',
  }
  ];

  let switchChecked = false;
</script>

<div class="flex flex-col gap-y-2">
  <div>
    <h3>Icons</h3>
    <div class="flex flex-wrap">
      <Icon src={AdjustmentsVertical} solid class="h-5 w-5" aria-hidden />
      <Icon src={Beaker} solid class="h-5 w-5" aria-hidden />
      <Icon src={AtSymbol} solid class="h-5 w-5" aria-hidden />
      <Icon src={ChatBubbleOvalLeftEllipsis} solid class="h-5 w-5" aria-hidden />
    </div>
  </div>

  <div>
    <h3>Components</h3>
    <div class="flex items-center flex-wrap gap-y-4">
      <Pagination />
      <div class="flex gap-x-2">
        <Button class="h-8">Test</Button>
        <Button class="h-8" iconLeft={AdjustmentsVertical}>Test</Button>
        <Button class="h-8" iconRight={AdjustmentsVertical}>Test</Button>
      </div>
      <TextInput />
      <TextInput placeholder="Search" />
      <TextInput placeholder="Meow" bind:value={testText} />
      {testText}

      <div class="w-full">
        <NumberInput bind:value={numberValue} min={10} max={1000}>Blub</NumberInput>
        {numberValue}

        <NumberInput noButtons bind:value={numberValue} min={10} max={1000}>Blub</NumberInput>
        {numberValue}
      </div>

      <div class="w-full flex flex-col gap-y-2">
        <Listbox value={listboxValue} options={[{ name: 'Testing', value: 1 }, { name: 'Testing 2', value: 2 }]} />
        <Dropdown
          label="Tier"
          value={dropdownValue}
          options={[
            { name: 'All', value: -1, display: false },
            { name: 'I', value: 1, class: 'text-green-700' },
            { name: 'II', value: 1 }
          ]}
        />
      </div>
      <div class="w-full">
        <Slider min="1" max="15" bind:value={sliderValue} />
        {sliderValue}
      </div>
      <div class="w-full">
        <Slider min="1" max="15" bind:value={sliderValueRange} />
        {sliderValueRange}
      </div>
      <div class="w-full">
        <Slider min="1" max="150" noTicks bind:value={sliderValue2} />
        {sliderValue2}
      </div>
      <div class="w-full">
        <Slider min="1" max="10" noTicks smooth bind:value={sliderValue3} />
        {sliderValue3}
      </div>
      <div class="w-full">
        <Checkbox bind:checked>Magical</Checkbox>
        {checked}
      </div>
      <div class="w-full">
        <Table headers={tableHeaders} items={tableItems} />
      </div>
      <div class="w-full">
        <Table horizontal headers={tableHeaders} items={tableItems} />
      </div>
      <div class="w-full">
        <Table sortable headers={tableHeaders} items={tableItems} />
      </div>
      <div class="w-full">
        <TextInput placeholder="Search" bind:value={tableFilter} />
        <Table sortable headers={tableHeaders} items={tableItems} filter={tableFilter} />
      </div>

      <div class="w-full">
        <Card>
          <CardHeader>
              <CardTitle>Some kind of Title or whatever</CardTitle>
              <CardSubtitle>This subtitle</CardSubtitle>
          </CardHeader>
          <CardContent>
              <Button class="h-8">Test</Button>
              <Button class="h-8" iconLeft={AdjustmentsVertical}>Test</Button>
              <Button class="h-8" iconRight={AdjustmentsVertical}>Test</Button>
          </CardContent>
        </Card>
      </div>
      <div class="w-full">
        <RadioGroup options={[{value: 1, label: 'Option 1'}, {value: 2, label: 'Option 2'}]} />
      </div>
      <div class="w-full">
        <RadioGroup horizontal options={[{value: 1, label: 'Option 1'}, {value: 2, label: 'Option 2'}]} />
      </div>
      <div class="w-full">
        <Switch bind:checked={switchChecked}>
          I'm a sexy Switch {switchChecked ? 'ON' : 'OFF'}
        </Switch>
      </div>
    </div>
  </div>
</div>
