export default {
  name: 'LDrum',
  bpm: 124,
  swing: 0.2,
  channels: [
    {
      id: 'empty_channel',
      sample: {
        name: 'LDrum Bass',
        url: 'assets/audio/linn-bd.mp3',
      },
      gain: 1,
    },
    {
      id: 'eca3906c-9577-4a38-a025-87f6c7b8fa88',
      sample: {
        name: 'LDrum Snare',
        url: 'assets/audio/linn-sd.mp3',
      },
      gain: 0.65,
      reverb: 0.1,
      pan: 0,
    },
    {
      id: 'c068fa91-9977-4fb1-9f41-ec3fe8473cea',
      sample: {
        name: 'LDrum Hi-hat Closed',
        url: 'assets/audio/linn-ch.mp3',
      },
      gain: 0.1,
      reverb: 0.2,
      pan: 0.3,
    },
    {
      id: '4ed97fa7-8798-4cf6-8c7b-0e42c76f1612',
      sample: {
        name: 'LDrum Hi-hat Pressed',
        url: 'assets/audio/linn-ph.mp3',
      },
      gain: 0.15,
      reverb: 0.2,
      pan: 0.3,
    },
    {
      id: '7ac094ef-282c-4d9d-8d7c-390118dd925a',
      sample: {
        name: 'LDrum High Tom',
        url: 'assets/audio/linn-ht.mp3',
      },
      gain: 0.26,
      reverb: 0.35,
      pan: -0.5,
    },
    {
      id: '046c982a-2576-453d-b021-963c6d3076ee',
      sample: {
        name: 'LDrum Mid Tom',
        url: 'assets/audio/linn-mt.mp3',
      },
      gain: 0.27,
      reverb: 0.35,
      pan: -0.3,
    },
    {
      id: '12a11640-05d9-4a1e-88ff-c4c7525385b1',
      sample: {
        name: 'LDrum Low Tom',
        url: 'assets/audio/linn-lt.mp3',
      },
      gain: 0.30,
      reverb: 0.35,
      pan: -0.1,
    },
    {
      id: 'e72fec64-9e3d-4848-81ee-c35643a70624',
      sample: {
        name: 'LDrum Cowbell',
        url: 'assets/audio/linn-cowbell.mp3',
      },
      gain: 0.24,
      reverb: 0.2,
      pan: 0.4,
    },
    {
      id: '06126c09-a20b-4cf4-8c05-a812d3ebc7c8',
      sample: {
        name: 'LDrum Clap',
        url: 'assets/audio/linn-clap.mp3',
      },
      gain: 0.44,
      reverb: 0.1,
      pan: -0.5,
    },
    {
      id: 'c4b37dfa-8f2f-491b-942a-b271b7b24c71',
      sample: {
        name: 'LDrum Rimshot',
        url: 'assets/audio/linn-rim.mp3',
      },
      gain: 0.43,
      reverb: 0.1,
      pan: 0.5,
    },
    {
      id: '3bd51432-6e07-4ec5-93b0-04eef8be49f6',
      sample: {
        name: 'LDrum Tambourine',
        url: 'assets/audio/linn-tamb.mp3',
      },
      gain: 0.28,
      reverb: 0.3,
      pan: 0.7,
    },
  ],
  notes: {
    empty_channel: [
      [
        {
          beat: 1,
          id: 'f9537c53-f916-434d-9697-86e500da2414',
        },
        {
          beat: 2,
          id: 'a8aecd47-1ef3-433a-8844-ad0b6e9550ff',
        },
        {
          beat: 3,
          id: '94e06d7f-fa55-4314-9caf-27191b706b8c',
        },
        {
          beat: 4,
          id: '9a610633-0c4e-4ebc-a907-da90f1a98e9e',
        },
      ],
      [
        {
          beat: 1,
          id: '38af500c-c153-4f12-bc5c-2c8ec6b8eafa',
        },
        {
          beat: 2,
          id: '4eb43cec-9542-4a0e-9616-35fa43b45d56',
        },
        {
          beat: 4,
          id: '5b1c927e-6eb7-489e-bf67-9e59620467bb',
        },
        {
          beat: 3,
          id: 'de2cf269-ea81-45f3-9b68-ccbf4fe41ca9',
        },
      ],
      [
        {
          beat: 1,
          id: '1c6b732a-ce76-4f07-90f2-7ba9d3f14da0',
        },
        {
          beat: 2,
          id: 'e2793169-3989-4e5d-bb97-91c642172104',
        },
        {
          beat: 3,
          id: '28009164-8f89-4a17-82cb-2c904be196a8',
        },
        {
          beat: 4,
          id: 'c4285da8-5e44-44a7-8a09-f7d0da6b3aa2',
        },
        {
          beat: 4.5,
          id: 'f5768e8f-b408-4dcf-a86b-1a65eac0f13c',
        },
        {
          beat: 4.75,
          id: 'd2ddfcdf-2cf6-420b-ae35-56c49e4f8f4e',
        },
      ],
      [
        {
          beat: 1,
          id: '43069058-8f8e-4423-a9be-ce4f469b6f0f',
        },
        {
          beat: 3.5,
          id: '4c901c5a-7ace-42e8-89bc-d8381a6aca65',
        },
        {
          beat: 4.25,
          id: '9b0af2ff-3596-40f9-86f7-de123046b27a',
        },
        {
          beat: 2.5,
          id: '7e4505e6-446a-4855-9465-9f9e204a1de6',
        },
      ],
      [
        {
          beat: 1,
          id: '6a394bca-a802-46a2-9bda-f0376793de35',
        },
        {
          beat: 2,
          id: '1c7de135-b429-480f-8780-2f95722f4492',
        },
        {
          beat: 3,
          id: 'b6405cf3-6f51-4a09-8a50-2e1f9321d754',
        },
        {
          beat: 4,
          id: 'dc15b93a-affb-47bf-87a2-ddeb1b1c54b6',
        },
      ],
      [
        {
          beat: 1,
          id: '85dfaf1a-d43b-4f8f-b277-1edba8188568',
        },
        {
          beat: 1.75,
          id: '94bca68b-ea37-4ceb-b858-ea835e8bec5e',
        },
        {
          beat: 2.5,
          id: '57618e04-00b0-44cf-ae9b-1449fbf67cc0',
        },
        {
          beat: 3.5,
          id: 'b8cb485a-1a11-4054-ac6d-e95f78f0a327',
        },
        {
          beat: 3.75,
          id: 'e13a78a0-aed9-4db9-a902-bba81e678b46',
        },
        {
          beat: 4.5,
          id: '2b2e507c-d383-4a99-a8ac-b2ad0eb03afb',
        },
      ],
      [
        {
          beat: 1,
          id: 'abf70cdc-f4ab-477b-8b14-5bdcce752a4b',
        },
        {
          beat: 4.5,
          id: '55a3ce00-1723-420b-b8df-1ae1dad93e2e',
        },
      ],
      [
        {
          beat: 1,
          id: '946594e8-8569-4ea5-8cbd-667faad73cd4',
        },
        {
          beat: 2,
          id: '5239b5f7-a009-40d1-8ca9-77f3f5e59c39',
        },
        {
          beat: 3,
          id: 'b67ca07c-9791-4f32-8134-1187e4bb5119',
        },
        {
          beat: 3.25,
          id: '600a8ac1-5206-4545-86e0-3df14f165dd2',
        },
        {
          beat: 3.5,
          id: 'b43191ed-36f0-4fad-a909-68c8736e72a5',
        },
        {
          beat: 3.75,
          id: '977fa833-0b6b-4e2c-a634-74d0082141b0',
        },
        {
          beat: 4,
          id: 'd63fcab7-ed08-42e0-a56f-f78e9265f0bc',
        },
        {
          beat: 4.25,
          id: 'f02eb38c-f046-4d7c-9792-38a32e258926',
        },
        {
          beat: 4.5,
          id: 'debc09eb-682b-4790-843d-c54f92e4801b',
        },
        {
          beat: 4.75,
          id: '98bbe8b5-bb5e-4585-89bf-a148d15fe14b',
        },
      ],
    ],
    'eca3906c-9577-4a38-a025-87f6c7b8fa88': [
      [
        {
          beat: 2,
          id: 'c363f89a-cc72-4d2f-aa9e-2bc566f9910e',
        },
        {
          beat: 4,
          id: '18f833c1-3fbe-49de-8556-0e564534f3f2',
        },
      ],
      [
        {
          beat: 2,
          id: 'a384c923-751d-4033-a556-ebacb2469a1a',
        },
        {
          beat: 4,
          id: 'c24c4906-fbd2-48cd-a400-5e5bb15de3b2',
        },
      ],
      [],
      [
        {
          beat: 2,
          id: '00f68589-77b4-47a9-9e1a-b3d9e44a12a3',
        },
        {
          beat: 4,
          id: 'd71d7f60-fa3b-4c22-8e67-4ecb5d5a870b',
        },
      ],
      [
        {
          beat: 4.5,
          id: 'cf054f6a-c3a9-4754-8005-c920e3315b93',
        },
        {
          beat: 2,
          id: '1e9cfb91-96b9-496d-908e-84029a046582',
        },
      ],
      [
        {
          beat: 2,
          id: '3cf01e35-ade2-4786-a537-c4169c05e717',
        },
        {
          beat: 4,
          id: 'f2255cb3-8e4f-4667-9b97-21f360b20b64',
        },
      ],
      [
        {
          beat: 2,
          id: '30cefbb0-4ae1-405c-abf5-74e7bc99620d',
        },
        {
          beat: 4,
          id: 'e942a593-39b2-40c3-a3cd-72dbd81c0873',
        },
      ],
      [
        {
          beat: 2,
          id: 'be3eeed2-0522-4d07-b055-c80b06b16020',
        },
        {
          beat: 4,
          id: '25d9b2dd-3f45-4e50-9b4f-6bb1a806b2a7',
        },
      ],
    ],
    'c068fa91-9977-4fb1-9f41-ec3fe8473cea': [
      [
        {
          beat: 1.5,
          id: '57a9a0f6-d577-4381-9e91-df55be6c6c26',
        },
        {
          beat: 2.5,
          id: 'f97b8fee-49cd-41b0-9a9f-ea006edbaae3',
        },
        {
          beat: 3.5,
          id: '1067fcad-8958-4712-bced-095f6210e36a',
        },
        {
          beat: 4.5,
          id: 'f8e73df5-a57a-4928-a941-69411c0bd609',
        },
      ],
      [
        {
          beat: 1.5,
          id: 'cb533ea2-4485-43e9-ab9d-b62d23eeadb9',
        },
        {
          beat: 2.5,
          id: 'b7ae837e-1ea8-47bf-9e7b-4ffd6572b9bb',
        },
        {
          beat: 3.5,
          id: 'c62a9f34-4f8b-47ad-9548-7923fea09b9f',
        },
        {
          beat: 4.5,
          id: '368904f3-84b8-43cd-aa78-74e518ff3b6e',
        },
      ],
      [],
      [
        {
          beat: 1.5,
          id: 'd50a7e07-0a86-43da-bbce-4989d9242bf2',
        },
        {
          beat: 1.75,
          id: '7756766c-ee9a-423a-962d-53e9a4a08ab0',
        },
        {
          beat: 2.5,
          id: 'bb1ad65f-8365-4475-b5f4-554d20a925b2',
        },
        {
          beat: 2.75,
          id: '4cc38af7-889a-4868-ac4d-071637b45512',
        },
        {
          beat: 3.5,
          id: '02cbff37-4de2-420c-b183-c3e916749788',
        },
        {
          beat: 3.75,
          id: '8ef297a9-c1d0-40db-8e8c-cdbefe4ea651',
        },
        {
          beat: 4.5,
          id: '3155ca15-d2f0-4faa-bd8b-7b54d61ac6bc',
        },
        {
          beat: 4.75,
          id: '4c3235c6-8cad-4bc6-882f-2bbbe9f900ef',
        },
      ],
      [
        {
          beat: 1.25,
          id: '95b23210-ecd8-4861-9ece-797717a2ed77',
        },
        {
          beat: 1.75,
          id: '5743bde4-4f27-45b9-923c-128f73c39c3a',
        },
        {
          beat: 3.25,
          id: '458362b7-9587-4b1f-960a-8736506c5504',
        },
        {
          beat: 3.5,
          id: 'd5c04c09-91c7-4653-ad33-203c99fe8e4d',
        },
        {
          beat: 3.75,
          id: '63b7aa22-a55b-4c13-ac43-f48b64ee418f',
        },
        {
          beat: 4.25,
          id: 'b3d7000b-72b6-4d25-8aa3-3a874bb385ef',
        },
        {
          beat: 4.5,
          id: '503375ea-f43c-468a-ad87-af11412d9a2f',
        },
        {
          beat: 4.75,
          id: '80b0e871-3a6d-4572-8428-39eb19cd3bfb',
        },
        {
          beat: 1.5,
          id: '2f925e26-784b-4fec-9968-5b925cb24f8d',
        },
        {
          beat: 2.25,
          id: '5b20b66b-10f7-49c1-ad42-3ef2f294cd24',
        },
        {
          beat: 2.75,
          id: '9ab8f5e5-31fa-4598-a41b-560ce212ec50',
        },
        {
          beat: 2.5,
          id: '8439ba8f-1ba8-4503-95c8-a9ab0454f05c',
        },
      ],
      [
        {
          beat: 1.25,
          id: '820057ba-35fb-4c79-abeb-f06b2ffaeca3',
        },
        {
          beat: 1.5,
          id: '425f77ca-eee7-4d67-880e-fd8ed9216fbe',
        },
        {
          beat: 1.75,
          id: '4726fe9d-477b-4b06-b76d-c36897bcaeaa',
        },
        {
          beat: 2.25,
          id: 'f1adb17a-308a-4512-9ce1-036173517e48',
        },
        {
          beat: 2.5,
          id: '88762626-761f-4fb6-866b-408e0bf64541',
        },
        {
          beat: 2.75,
          id: '7f37b1f1-6421-431c-a624-a0dca86ba2ca',
        },
        {
          beat: 3.25,
          id: 'c101fb88-ddf6-4725-a543-08fd2573385d',
        },
        {
          beat: 3.5,
          id: 'db6127e2-ac00-4ff2-adb8-25ac13212792',
        },
        {
          beat: 4,
          id: '8bce9e4f-f1c8-4857-baa2-3634f3e1f8a1',
        },
        {
          beat: 4.25,
          id: 'fd8d21bb-1cb1-4198-94d7-8315cd5850ae',
        },
        {
          beat: 4.5,
          id: 'f3083a12-d5d1-4319-b291-a0c25f3d18cd',
        },
        {
          beat: 4.75,
          id: '30670921-d80f-4ad8-b672-d68bd87c68ea',
        },
      ],
      [
        {
          beat: 1.5,
          id: 'ab8073ab-176c-4ca5-a879-20ee3dbea4a1',
        },
        {
          beat: 2,
          id: 'd4fb2c83-47bc-4bcf-ad5b-f722b24bba2f',
        },
        {
          beat: 2.5,
          id: '8ce200de-203b-4c12-831d-63013b4b3102',
        },
        {
          beat: 3,
          id: '243963db-7c85-4e61-b715-e485c3cc155f',
        },
        {
          beat: 3.5,
          id: '5220a19d-1a8f-4428-a11f-54ea0c3f95ba',
        },
        {
          beat: 4.5,
          id: '6ab1ccd8-e95c-4791-ba40-a14ebb477f67',
        },
      ],
      [
        {
          beat: 1.5,
          id: '57003873-ca6f-4554-ae80-462a7d4df020',
        },
        {
          beat: 1.75,
          id: '6531ed77-f7fb-4735-bbe2-967fa28e35fb',
        },
        {
          beat: 2.5,
          id: '3ab75a14-6ca6-4fcf-a801-fa0ff7c8f280',
        },
        {
          beat: 2.75,
          id: 'b1d347d9-b22e-468f-b7c0-44ff09b436ed',
        },
        {
          beat: 3.5,
          id: 'a5ba160e-fc4a-4df3-a1f2-1408ce0e90f1',
        },
        {
          beat: 3.75,
          id: 'dab5bf93-eef3-4fab-9781-86f07508ad2a',
        },
        {
          beat: 4.5,
          id: '434c58cb-4bba-48aa-9bda-fa1ecb5b5d89',
        },
        {
          beat: 4.75,
          id: 'b5a2db63-2aae-46ee-9950-abfffb78f84a',
        },
      ],
    ],
    '4ed97fa7-8798-4cf6-8c7b-0e42c76f1612': [
      [
        {
          beat: 1,
          id: '8ac39cd2-9fa9-496f-b715-17127eb5ca1e',
        },
        {
          beat: 2,
          id: 'f5e65dcb-8ed4-438e-b82e-6d515b41778d',
        },
        {
          beat: 3,
          id: 'fa570e68-b4b4-4845-a57b-52ebb2466ea3',
        },
        {
          beat: 4,
          id: '7efb37f5-2f0c-471d-b45c-88982e1e5313',
        },
      ],
      [
        {
          beat: 1,
          id: 'd3dcb8fa-f1be-4f24-9dc7-7eae74b8bf7d',
        },
        {
          beat: 2,
          id: 'ba2fc358-76f3-4e29-ad7d-af49262990f9',
        },
        {
          beat: 3,
          id: 'a170429d-8d3d-4b73-81c7-eb30bfc11894',
        },
        {
          beat: 4,
          id: '51fdcc1d-6a80-45c6-8679-69b346581c71',
        },
      ],
      [
        {
          beat: 1,
          id: '780939be-af1d-4090-a9bf-ce4ce9704ba4',
        },
        {
          beat: 2,
          id: '369aa28e-56e7-4c3b-82a0-0f4ea8824342',
        },
        {
          beat: 3,
          id: 'cec4c74a-684d-47c3-8179-20b248843dd3',
        },
        {
          beat: 4,
          id: '68d5aaf2-01e1-4554-8068-a49854e3463b',
        },
      ],
      [
        {
          beat: 1,
          id: '1c818f8d-d82e-43c5-b786-b4698646ad9d',
        },
        {
          beat: 2,
          id: 'd53c1d33-5e6b-434e-97bc-24f63ae3a0ff',
        },
        {
          beat: 3,
          id: '7fb65445-5480-4c9a-b648-1411402d6cae',
        },
        {
          beat: 4,
          id: 'd940e016-b171-40b5-978c-b095c4b81139',
        },
      ],
      [
        {
          beat: 1,
          id: '2ce68236-9d55-4b07-8325-36e11642bef5',
        },
        {
          beat: 2,
          id: '328e608e-5e7b-4b61-9855-b7972f9ca391',
        },
        {
          beat: 3,
          id: '861aae24-bcab-4ee6-ad64-1dcaeda79aba',
        },
        {
          beat: 4,
          id: 'e1ac4617-7ac4-4103-81d7-0dbef5f46c03',
        },
      ],
      [
        {
          beat: 1,
          id: '3e597539-9b7a-4122-8ce5-6be97dec9eee',
        },
        {
          beat: 2,
          id: '243d3858-3c81-45c3-bdd5-b241d34274dd',
        },
        {
          beat: 3,
          id: 'b6612d76-e85b-4c76-a956-d09c2a7d242a',
        },
        {
          beat: 3.75,
          id: 'b9587a06-60c0-48c8-92d4-654a93a7f187',
        },
      ],
      [
        {
          beat: 1,
          id: '3e6480dc-e080-4da9-a705-95e2ffb8120b',
        },
        {
          beat: 4,
          id: 'ff253c70-0929-48bf-91d3-55369e57acf4',
        },
      ],
      [],
    ],
    '7ac094ef-282c-4d9d-8d7c-390118dd925a': [
      [],
      [
        {
          beat: 1,
          id: '3dbfc617-d4d8-43b2-8553-ad4c394f3468',
        },
      ],
      [],
      [],
      [
        {
          beat: 3,
          id: '54ef53d6-4c41-4502-b402-92de238ae13c',
        },
        {
          beat: 4.5,
          id: '9f16fcca-a4b6-4989-9b79-d0209d30fba4',
        },
      ],
      [],
      [],
      [],
    ],
    '046c982a-2576-453d-b021-963c6d3076ee': [
      [],
      [
        {
          beat: 1.75,
          id: '15914063-1610-4045-8741-ca4ef89aa9ae',
        },
      ],
      [],
      [],
      [
        {
          beat: 3.5,
          id: 'd24fe24f-4816-49fc-8d80-786f2a81899b',
        },
      ],
      [],
      [
        {
          beat: 3.5,
          id: '4e149455-6607-4182-8b32-62bc0504910c',
        },
      ],
      [],
    ],
    '12a11640-05d9-4a1e-88ff-c4c7525385b1': [
      [],
      [
        {
          beat: 2.5,
          id: 'bb83c91a-1113-4a22-86a0-f82d5f79fb75',
        },
        {
          beat: 3.5,
          id: 'f1119e47-3fa6-4252-a2da-9f1f69fda753',
        },
      ],
      [],
      [],
      [
        {
          beat: 3.75,
          id: '16f782bc-9119-4027-a255-19ac4b48ace4',
        },
        {
          beat: 4.5,
          id: 'c68bc580-927f-407c-be0e-5dbbfb9db1d1',
        },
      ],
      [
        {
          beat: 3.5,
          id: '47dc9fce-95b7-4251-8551-0647baa5e37a',
        },
      ],
      [
        {
          beat: 4.5,
          id: 'd8fef37d-24a3-4159-969d-5150903be141',
        },
      ],
      [],
    ],
    'e72fec64-9e3d-4848-81ee-c35643a70624': [
      [],
      [],
      [
        {
          beat: 1,
          id: '3225b1df-8e08-4f63-9ba5-90a5fc8f6ffe',
        },
        {
          beat: 1.5,
          id: '38ce24c2-c238-45c3-8253-fa17b059e8c3',
        },
        {
          beat: 2,
          id: 'f9088de3-375f-4412-92b4-0e2764693657',
        },
        {
          beat: 2.25,
          id: '9fcefcd5-5724-404a-80d6-11c2e92cdae8',
        },
        {
          beat: 2.75,
          id: 'b061538f-361d-42d0-a3c4-8a48cabb7fa8',
        },
        {
          beat: 3.5,
          id: '5dbb95e8-8218-40b4-8a93-13ac7d45acd6',
        },
        {
          beat: 4,
          id: 'bbcf5992-8742-4e4b-9ddd-95c4e6d81ea7',
        },
        {
          beat: 4.5,
          id: 'd39c2d9a-3441-480b-9474-d7bfa171d08a',
        },
      ],
      [
        {
          beat: 1,
          id: '6b32ce50-6709-498a-a461-08d54d14f759',
        },
        {
          beat: 1.5,
          id: '6445067d-d845-4b11-a102-44abdc5284d6',
        },
        {
          beat: 2.25,
          id: '44c90554-c61a-443a-a64a-772929c33e07',
        },
        {
          beat: 3,
          id: '80fc0e9d-6e9e-4634-8a54-3d054c5b84ff',
        },
        {
          beat: 3.75,
          id: 'dba2568f-738c-4766-8938-f777d8a908b3',
        },
        {
          beat: 4.5,
          id: '21f4d57d-2044-45a8-9b9c-b415e6e55c41',
        },
      ],
      [],
      [],
      [
        {
          beat: 1,
          id: '3ba9c1c3-6d7c-420c-80a0-465984c9cb18',
        },
        {
          beat: 2,
          id: '857b1252-951e-40c1-a889-33862385bf54',
        },
        {
          beat: 3,
          id: '5447729c-133b-4d05-be12-f0bc42d31c5e',
        },
        {
          beat: 4,
          id: '9a7dfc2e-4921-4a9b-b0b5-2a37c66926ec',
        },
      ],
      [],
    ],
    '06126c09-a20b-4cf4-8c05-a812d3ebc7c8': [
      [],
      [],
      [
        {
          beat: 2,
          id: '65b0d5df-89c2-45ff-b551-6887c52643a4',
        },
        {
          beat: 4,
          id: 'd6c0e4d0-f1e1-4776-b2ce-67046a2a3c93',
        },
      ],
      [],
      [],
      [
        {
          beat: 1.5,
          id: 'beb5b7b4-a01f-4927-ab19-01a0a0e247cd',
        },
        {
          beat: 2.5,
          id: '67ffddf1-db5c-42f0-9291-2dde75fbc25f',
        },
        {
          beat: 3,
          id: '36cb3941-4d89-48c0-b172-a472797860d6',
        },
      ],
      [],
      [
        {
          beat: 2,
          id: '4f08dd26-2747-48cf-aca0-7ba192b4ec61',
        },
        {
          beat: 4,
          id: '56530e31-f07c-42ee-806e-35c27ec3480c',
        },
      ],
    ],
    'c4b37dfa-8f2f-491b-942a-b271b7b24c71': [
      [],
      [],
      [
        {
          beat: 4,
          id: '121cb8e8-c5d1-44ce-90dd-5851da41a1af',
        },
      ],
      [
        {
          beat: 1,
          id: 'cd2d7c62-5c04-47c2-b353-05ec4c01b8e6',
        },
      ],
      [],
      [
        {
          beat: 3.75,
          id: '93701ee1-8442-4c34-8ec8-6232ce1ddff5',
        },
      ],
      [
        {
          beat: 2.5,
          id: '93caca6b-7ead-4c3c-b0eb-47faed44a9ab',
        },
      ],
      [],
    ],
    '3bd51432-6e07-4ec5-93b0-04eef8be49f6': [
      [],
      [],
      [],
      [],
      [],
      [
        {
          beat: 1,
          id: '3456eb7c-091d-4698-8b66-5482a5ee2fbf',
        },
        {
          beat: 3,
          id: '3c063e4b-361c-4dda-8df3-1ff3da9c7e95',
        },
      ],
      [
        {
          beat: 2,
          id: '324da79d-4cde-45c7-8d6b-5775d0fdd45b',
        },
        {
          beat: 4,
          id: 'a1da337e-799d-445f-8670-baf480620420',
        },
      ],
      [
        {
          beat: 1,
          id: '506317dc-0772-43af-82c1-17dd28fe50e7',
        },
        {
          beat: 2,
          id: '1e50f328-7070-4a69-be19-bba1649ffbd4',
        },
        {
          beat: 3,
          id: '8343c55e-a041-43fa-8615-878057fe237a',
        },
        {
          beat: 4,
          id: '52b072fb-eb3e-410f-906c-feedbf77faea',
        },
      ],
    ],
  },
};
