'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { LuUpload } from 'react-icons/lu';
import { IoCalendar } from 'react-icons/io5';
import { IoTime } from 'react-icons/io5';
import { IoLocationSharp } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosInformationCircle } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { ErrorMessage, Field, Form, Formik, useFormikContext } from 'formik';
import apiInstance from '@/utils/axiosInstance';
import { createEventSchema } from '@/features/schemas/create.event.schema/createEventSchema';
import { toast } from 'react-toastify';

type TMainTabKeys = 'eventDateTime' | 'eventForms' | 'ticketForms';
type TSubTabKeys = 'first' | 'second';
type TTabTitle = string;
type TOpenModal = 'eventDateTime' | 'eventCategories' | 'ticketForms' | null;
type TTicketType = 'BERBAYAR' | 'BAYAR_SESUKAMU' | 'GRATIS';

interface IActiveTabState {
  mainTab: TMainTabKeys;
  subTab: TSubTabKeys;
  tabTitle: TTabTitle;
}

interface IEventFormat {
  id: number;
  formatName: string | undefined;
}

interface IEventTopic extends IEventFormat {
  topicName: string;
}

interface IEventCategory {
  eventFormatId: number | string;
  eventTopicId: number | string;
  formatName: string;
  topicName: string;
}

interface ITicketType {
  ticketType: TTicketType;
  maxTicketPerTransaction: number;
}

interface TicketSelectorProps {
  handleModalOpen: (formName: TOpenModal) => void;
}

export default function CreateEventPage() {
  const createEventTabs = {
    eventDateTime: {
      first: 'Tanggal Event',
      second: 'Waktu Event',
    },
    eventForms: {
      first: 'Kategori Event',
      second: 'Deskripsi Event',
    },
    ticketForms: {
      first: 'Detail Tiket',
      second: 'Tanggal Penjualan',
    },
  };
  const [activeTabs, setActiveTabs] = React.useState<IActiveTabState>({
    mainTab: 'eventForms',
    subTab: 'first',
    tabTitle: 'Tanggal Event',
  });
  const handleTabChange = (mainTab: TMainTabKeys, subTab: TSubTabKeys) => {
    setActiveTabs({
      mainTab,
      subTab,
      tabTitle: createEventTabs[mainTab][subTab],
    });
  };

  const TabsTitleComponent = ({
    mainTab,
    subTab,
  }: {
    mainTab: TMainTabKeys;
    subTab: TSubTabKeys;
  }): JSX.Element => {
    const title = createEventTabs[mainTab][subTab];
    const isActive =
      activeTabs.mainTab === mainTab && activeTabs.subTab === subTab;
    return (
      <div
        onClick={() => handleTabChange(mainTab, subTab)}
        className={
          `relative pb-4 cursor-pointer tracking-[0.3px] flex-1 text-center ` +
          `border-b-[#e8e8e8] font-medium leading-6 ${
            isActive ? ' text-[#151416] active' : ' text-[#8e919b]'
          }`
        }
      >
        {title}
      </div>
    );
  };
  const [modalOpen, setModalOpen] = React.useState(false);
  const [openModalType, setOpenModalType] = React.useState<TOpenModal>(null);
  const handleModalOpen = (modal: TOpenModal) => {
    // close modal
    if (modal === null) {
      setModalOpen(false);
      setOpenModalType(null);
      setActiveTabs({
        mainTab: 'eventForms',
        subTab: 'first',
        tabTitle: createEventTabs.eventForms.first,
      });
      return;
    }

    // open modal
    setOpenModalType(modal);
    setModalOpen(true);

    const validMainTabs = ['eventDateTime', 'ticketForms'] as TMainTabKeys[];
    if (validMainTabs.includes(modal as TMainTabKeys)) {
      setActiveTabs({
        mainTab: modal as TMainTabKeys,
        subTab: 'first',
        tabTitle: createEventTabs[modal as TMainTabKeys]['first'],
      });
    }
  };
  const CloseModalButton = (): JSX.Element => {
    return (
      <button
        className="absolute top-[10px] right-[10px]"
        onClick={() => handleModalOpen(null)}
      >
        <AiOutlineClose className="text-[#9f9f9f] text-xl" />
      </button>
    );
  };
  const [eventCategories, setEventCategories] = React.useState({
    eventFormatId: 0,
    format: '',
    eventTopicId: 0,
    topic: '',
    tags: '',
  });
  const [eventCategoryLists, setEventCategoryLists] = React.useState<{
    formats: IEventFormat[];
    topics: IEventTopic[];
  }>({
    formats: [],
    topics: [],
  });

  const handleGetEventCategories = async () => {
    try {
      const response = await apiInstance.get('/events/categories');
      setEventCategoryLists({
        formats: response.data.eventCategories.eventFormats,
        topics: response.data.eventCategories.eventTopics,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [countryPhones, setCountryPhones] = React.useState([]);
  const handleGetCountryPhone = async () => {
    try {
      const response = await apiInstance.get('/country-phones');
      setCountryPhones(response.data.countryPhones);
    } catch (error) {
      console.log(error);
    }
  };
  const [idCardStatus, setIdCardStatus] = React.useState('NO_ID');
  const handleIdCardStatusChange = () => {
    setIdCardStatus(idCardStatus === 'NO_ID' ? 'WITH_ID' : 'NO_ID');
  };
  const [ticketMaxOpen, setTicketMaxOpen] = React.useState(false);
  const [ticketPurchasedMax, setTicketPurchasedMax] = React.useState<number>(3);
  const ticketType = ['Berbayar', 'Bayar Sesukamu', 'Gratis'];

  const handleSelectMaxTicket = (e: any) => {
    e.preventDefault();
    setTicketMaxOpen(!ticketMaxOpen);
  };
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setTicketMaxOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ticketMaxOpen]);
  const orderDataFormCheck = [
    { id: 'fullName', formTitle: 'Nama Lengkap', checkStatus: true, value: '' },
    { id: 'email', formTitle: 'Email', checkStatus: true, value: '' },
    {
      id: 'phoneNumber',
      formTitle: 'Nomor Handphone',
      checkStatus: true,
      value: '',
    },
    {
      id: 'idCardStatus',
      formTitle: 'No. KTP',
      checkStatus: false,
      value: 'WITH_ID',
    },
    {
      id: 'birthDate',
      formTitle: 'Tanggal Lahir',
      checkStatus: true,
      value: '',
    },
    { id: 'gender', formTitle: 'Jenis Kelamin', checkStatus: true, value: '' },
  ];
  const [submitFormTest, setSubmitFormTest] = React.useState({});
  const handleFormSubmit = (values: any) => {
    try {
      console.log(values);
      setSubmitFormTest(values);
      toast.success('Form submitted successfully');
    } catch (error) {
      toast.error('Failed to submit form');
    }
  };
  const DisplayEventFormatChosen = () => {
    const { values } = useFormikContext<IEventCategory>();
    const selectedFormat: IEventFormat | undefined =
      eventCategoryLists.formats.find(
        (f: IEventFormat) => f.id === Number(values.eventFormatId),
      );
    const selectedTopic: IEventTopic | undefined =
      eventCategoryLists.topics.find(
        (t: IEventTopic) => t.id === Number(values.eventTopicId),
      );
    return (
      <>
        <span>{selectedFormat?.formatName}</span>
        <span
          className={`${selectedFormat !== undefined && selectedTopic !== undefined ? 'inline-block' : 'hidden'} dotdot mx-[5px] w-2 h-2 rounded-full bg-[#d5d5d5]`}
        ></span>
        <span>{selectedTopic?.topicName}</span>
        <span className="ml-1 inline-block leading-1 align-[-0.125em]">
          {selectedFormat !== undefined && selectedTopic !== undefined && (
            <BiSolidEdit />
          )}
          {selectedFormat === undefined && selectedTopic === undefined && (
            <span className="!text-[#adb6c9]">{'Pilih Kategori *'}</span>
          )}
        </span>
      </>
    );
  };

  const TicketSelector = ({ handleModalOpen }: TicketSelectorProps) => {
    // Now this is valid - called inside a function component
    const { values, setFieldValue } = useFormikContext<ITicketType>();

    const ticketOptions = [
      { label: 'Berbayar', value: 'BERBAYAR' },
      { label: 'Bayar Sesukamu', value: 'BAYAR_SESUKAMU_' },
      { label: 'Gratis', value: 'GRATIS' },
    ];

    const handleTicketSelect = (value: string) => {
      setFieldValue('ticketType', value);
      handleModalOpen('ticketForms');
    };

    return (
      <>
        {ticketOptions.map((item, index) => (
          <div
            className={`w-full max-w-full cursor-pointer ${
              values.ticketType === item.value
                ? 'ring-2 ring-blue-500'
                : 'hover:ring-1 hover:ring-gray-300'
            }`}
            key={index}
            onClick={() => handleTicketSelect(item.value)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleTicketSelect(item.value);
            }}
          >
            <button type="button" className="ticket-category-button w-full">
              {/* Keep your existing styling structure here */}
              <div className="flex">
                <div className="barcode w-[53px] max-w-full flex-middle-center py-4 overflow-hidden border-r border-[#d8dfe7]">
                  <Image
                    src={'/images/icon-barcode.svg'}
                    width={9}
                    height={58}
                    alt=""
                    className="h-auto max-w-full align-middle"
                  />
                </div>
                <div className="ticket-label">
                  <div className="flex flex-col justify-center capitalize">
                    <p className="font-normal text-sm leading-[1.5]">
                      Buat Tiket
                    </p>
                    <span className="text-lg">{item.label}</span>
                  </div>
                  <div className="add-ticket-button z-[2] flex items-center">
                    <span className="text-[42px] text-[#adb6c9]">
                      <CiCirclePlus />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </>
    );
  };

  const MaxTicketSelector = () => {
    const { values, setFieldValue } = useFormikContext<ITicketType>();
    const ticketPerPurchaseMax = [1, 2, 3, 4, 5];
    const handleTicketPerPurchaseMax = (value: number) => {
      setFieldValue('maxTicketPerTransaction', value);
      setTicketPurchasedMax(value);
    };
    return (
      <>
        {ticketPerPurchaseMax.map((item, index) => (
          <li
            className="p-[10px_15px] cursor-pointer hover:bg-[#f7f7f7]"
            key={index}
            onClick={() => handleTicketPerPurchaseMax(item)}
          >
            {item}
            {' Tiket'}
          </li>
        ))}
      </>
    );
  };

  React.useEffect(() => {
    handleGetEventCategories();
    handleGetCountryPhone();
  }, []);
  return (
    <Formik
      initialValues={{
        creatorId: '',
        eventName: '',
        eventFormatId: 0,
        eventTopicId: 0,
        eventTag: '',
        isPrivateEvent: false,
        organizerName: '',
        oganizerLogoImgUrl: '',
        bannerImgUrl: '',
        eventStartDate: '',
        eventEndDate: '',
        eventStartTime: '',
        eventEndTime: '',
        eventLocation: '',
        eventDesc: '',
        ticketType: '',
        ticketName: '',
        ticketQty: 0,
        ticketPrice: 0,
        ticketDesc: '',
        ticketTermsAndCondition: '',
        ticketStartDate: '',
        ticketEndDate: '',
        eventCPName: '',
        eventCPEmail: '',
        eventCPCountryPhoneId: 103,
        eventCPPhone: '',
        idCardStatus: 'NO_ID',
        maxTicketPerTransaction: ticketPurchasedMax,
        oneEmailOneTransaction: false,
        ticketDataFormUnique: false,
        isDraft: false,
      }}
      validationSchema={createEventSchema}
      // onSubmit={(values) => handleFormSubmit(values)}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Submission values:', values);
        handleFormSubmit(values);
        setSubmitting(false);
      }}
      validate={(values) => {
        createEventSchema
          .validate(values, { abortEarly: false })
          .then(() => console.log('Validation passed'))
          .catch((err) => console.error('Validation errors:', err.errors));
      }}
    >
      <Form>
        <div className="relative">
          <div className="header-nav-top absolute top-0 left-0 right-0 z-10 bg-white box-shadow-small">
            <div className="bg-white s-container lg:px-10 sm:px-[30px] px-[15px] box-content max-w-[1200px] mx-auto ">
              <nav className="flex relative">
                <div className="navbar-left flex flex-wrap items-center ">
                  <div className="navbar-nav flex">
                    <div>
                      <Link
                        href={'/'}
                        className="text-[#595959] h-20 flex-middle-center px-2.5"
                      >
                        <Image
                          src={'/images/logo-loket-blue.svg'}
                          alt="LOKET - Buat Event Page dan Ramaikan Event-mu"
                          width={142}
                          height={38}
                        />
                      </Link>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="navbar-right flex ml-auto flex-wrap items-center">
                  <div className="navbar-nav flex">
                    <div>
                      <Link
                        href={'#'}
                        className="text-[#595959] h-20 flex-middle-center px-[15px] uppercase font-medium text-sm"
                      >
                        Bantuan
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div>
            <div className="create-event-form">
              <div className="create-event pt-20 mb-[130px]">
                <div className="create-event-container my-10 max-w-[900px] lg:px-10 sm:px-[30px] px-[15px] relative mx-auto box-content">
                  <div className="flex flex-wrap">
                    <div className="w-full max-w-full">
                      <div className="event-card border border-[#d8d8d8] rounded-2xl overflow-hidden">
                        <div className="event-card-banner">
                          <div className="relative ">
                            <div className="min-h-[421px] relative overflow-hidden z-0">
                              <div className="absolute top-0 left-0 right-0 bottom-0">
                                <div className="relative h-full object-cover">
                                  <Image
                                    src={'/images/banner-event.jpg'}
                                    width={898}
                                    height={421}
                                    alt=""
                                    quality={100}
                                    priority={true}
                                    className="w-full max-w-full"
                                  />
                                  <div className="banner-image-action absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-full lg:w-[60%] w-full">
                                    <div className="upload">
                                      <div className="upload-img-form inline-block relative max-w-full align-middle">
                                        <input
                                          type="file"
                                          accept="image/*"
                                          className="text-[500px] absolute top-0 z-1 w-full h-full left-0 opacity-0"
                                        />
                                        <BsPlusCircle className="text-5xl text-white" />
                                      </div>
                                      <div className="text-center text-white">
                                        <p className=" mt-2.5 text-[1.5rem] leading-[1.4] font-normal">
                                          {'Unggah gambar/poster/banner'}
                                        </p>
                                        <p className="text-[0.9375rem] ">
                                          {
                                            'Direkomendasikan 724 x 340 px dan tidak lebih dari 2MB'
                                          }
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="event-card-body p-[15px_40px_40px]">
                          <div className="flex flex-wrap">
                            <div className="event-name w-full max-w-full sm:mt-[15px] pl-[15px]">
                              <div className="w-full max-w-full">
                                <Field
                                  name="eventName"
                                  type="text"
                                  placeholder="Nama Event*"
                                  className="h-[55px] w-full max-w-full bg-white text-2xl text-[#151416] outline-none"
                                />
                                <ErrorMessage
                                  name="eventName"
                                  component="div"
                                  className="text-red-500 text-xs mt-1"
                                />
                              </div>
                            </div>
                            <div className="w-full max-w-full pl-[15px]">
                              <div className="mt-[5px] w-full max-w-full ">
                                <div className="form-control">
                                  <div
                                    onClick={() => {
                                      handleModalOpen('eventCategories');
                                    }}
                                    className="category-wrapper border-b border-[#d8d8d8] mb-[5px] cursor-pointer pb-2.5 text-[0.9375rem] !text-[#0049cc]"
                                  >
                                    <DisplayEventFormatChosen />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full max-w-full lg:w-1/3 mt-[15px] pl-[15px]">
                              <label className="mb-2.5 text-[#494a4a] block text-sm font-medium">
                                Diselenggarakan Oleh
                              </label>
                              <div className="flex items-center -ml-[15px]">
                                <div className="flex justify-center lg:w-1/3 w-auto max-w-full ">
                                  {/* image upload form  */}
                                  <div className="upload-logo p-[17px] rounded-full overflow-hidden border border-[#e8e8e8] cursor-pointer inline-block relative max-w-full align-middle text-center">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      className="text-[500px] absolute top-0 z-1 w-full h-full left-0 opacity-0"
                                    />
                                    <LuUpload className="text-2xl text-[#595959]" />
                                  </div>

                                  {/* uploaded image  */}
                                  <div className="hidden image-avatar relative overflow-hidden max-w-[67px] max-h-[67px] rounded-full group">
                                    <Image
                                      src={'/images/doraemon.png'}
                                      width={67}
                                      height={67}
                                      alt={''}
                                    />
                                    <div className="hover-overlay opacity-0 absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-100 group-hover:bg-white/80 rounded-full group-hover:border group-hover:border-[#d8d8d8]/70">
                                      <div className="position-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full">
                                        <span className="text-sm text-[#595959] font-normal inline-block leading-1 align-[-0.125em] opacity-0 group-hover:opacity-100">
                                          <RiDeleteBin5Fill />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="width-expanded pl-[15px] flex-1 w-full max-w-full">
                                  <Field
                                    name="organizerName"
                                    type="text"
                                    placeholder="Nama Organisasi*"
                                    className="h-[40px] align-middle inline-block w-full max-w-full bg-white text-[0.9375rem] text-[#151416] outline-none"
                                  />
                                  <ErrorMessage
                                    name="organizerName"
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-full max-w-full lg:w-1/3 mt-[15px] pl-[15px]">
                              <label className="mb-2.5 text-[#494a4a] block text-sm font-medium">
                                {`Tanggal & Waktu`}
                              </label>
                              <div>
                                <div className="event-date date-time-button cursor-pointer mb-5 text-[#adb6c9]">
                                  <IoCalendar className="text-base md:text-xl inline-block align-middle mr-1.5" />
                                  <span
                                    className="text-sm md:text-base"
                                    onClick={() =>
                                      handleModalOpen('eventDateTime')
                                    }
                                  >
                                    Pilih Tanggal
                                  </span>
                                </div>
                                <div className="event-time date-time-button cursor-pointer mb-5 text-[#adb6c9]">
                                  <IoTime className="text-base md:text-xl inline-block align-middle mr-1.5" />
                                  <span
                                    className="text-sm md:text-base"
                                    onClick={() =>
                                      handleModalOpen('eventDateTime')
                                    }
                                  >
                                    Pilih Waktu
                                  </span>
                                </div>
                                <div></div>
                              </div>
                            </div>
                            <div className="w-full max-w-full lg:w-1/3 mt-[15px] pl-[15px]">
                              <label className="mb-2.5 text-[#494a4a] block text-sm font-medium">
                                {`Lokasi`}
                              </label>
                              <div>
                                <div className="event-date date-time-button cursor-pointer mb-5 text-[#adb6c9]">
                                  <IoLocationSharp className="text-base md:text-xl inline-block align-middle mr-1.5" />
                                  <Field
                                    name="eventLocation"
                                    type="text"
                                    placeholder="Lokasi*"
                                    className="text-sm md:text-base outline-none border-b border-[#e8e8e8] text-[#151416]"
                                  />
                                  <ErrorMessage
                                    name="eventLocation"
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="create-event-container-2 xl:mb-[70px] mb-10 max-w-[900px] lg:px-10 sm:px-[30px] mx-auto box-content">
                  <div className="create-event-tabs-nav w-full max-w-full border-b border-[#d8d8d8]">
                    <div className="tabs-nav relative flex uppercase">
                      <TabsTitleComponent mainTab="eventForms" subTab="first" />
                      <TabsTitleComponent
                        mainTab="eventForms"
                        subTab="second"
                      />
                    </div>
                  </div>
                  <div className="create-event-content mt-8">
                    <div className="ticket-category-info grid grid-rows-[1fr] gap-8 ">
                      <div className="ticket-category">
                        <div className="ticket-category-container md:block hidden">
                          <div className="flex-middle-center ">
                            <div className="md:grid md:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] gap-[15px] w-full max-w-full">
                              {/* {ticketOptions.map((item, index) => (
                                <div
                                  className="w-full max-w-full"
                                  key={index}
                                  onClick={() => handleTicketSelect(item.value)}
                                >
                                  <button className="ticket-category-button">
                                    <div className="flex">
                                      <div className="barcode w-[53px] max-w-full flex-middle-center py-4 overflow-hidden border-r border-[#d8dfe7]">
                                        <Image
                                          src={'/images/icon-barcode.svg'}
                                          width={9}
                                          height={58}
                                          alt=""
                                          className="h-auto max-w-full align-middle"
                                        />
                                      </div>
                                      <div className="ticket-label">
                                        <div className="flex flex-col justify-center capitalize">
                                          <p className="font-normal text-sm leading-[1.5]">
                                            Buat Tiket
                                          </p>
                                          <span className="text-lg ">
                                            {item.label}
                                          </span>
                                        </div>
                                        <div className="add-ticket-button z-[2] flex items-center">
                                          <span className="text-[42px] text-[#adb6c9]">
                                            <CiCirclePlus />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              ))} */}
                              <TicketSelector
                                handleModalOpen={handleModalOpen}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="add-ticket-mobile"></div>
                      </div>
                      <div className="event-contact-info">
                        <div className="header-contact-info mb-4">
                          <div className="title-contact-info">
                            <span className="text-[#152955] text-[1.313rem] mb-2.5 font-medium">
                              Info Kontak
                            </span>
                          </div>
                          <span className="text-[#8e919b] text-sm">
                            Informasi narahubung yang dapat dihubungi oleh
                            pembeli akan muncul di E-Ticket.
                          </span>
                        </div>
                        <div className="body-contact-info">
                          <div className="mb-3">
                            <div className="mb-2.5 relative">
                              <label className="text-sm font-medium text-[#595959] capitalize">
                                Nama Narahubung
                                <em className="text-[#f0506e]">*</em>
                              </label>
                            </div>
                            <div className="w-full max-w-full">
                              <div className="form-control w-full max-w-full">
                                <div className="form-control-input">
                                  <Field
                                    name="eventCPName"
                                    type="text"
                                    placeholder="Nama narahubung"
                                    className="c-input"
                                  />
                                  <ErrorMessage
                                    name="eventCPName"
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="mb-2.5 relative">
                              <label className="text-sm font-medium text-[#595959] capitalize">
                                Email<em className="text-[#f0506e]">*</em>
                              </label>
                            </div>
                            <div className="w-full max-w-full">
                              <div className="form-control w-full max-w-full">
                                <div className="form-control-input">
                                  <Field
                                    name="eventCPEmail"
                                    type="email"
                                    placeholder="Email yang dapat dihubungi"
                                    className="c-input"
                                  />
                                  <ErrorMessage
                                    name="eventCPEmail"
                                    component="div"
                                    className="text-red-500 text-xs mt-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="mb-2.5 relative">
                              <label className="text-sm font-medium text-[#595959] capitalize">
                                {'No. Ponsel'}
                                <em className="text-[#f0506e]">*</em>
                              </label>
                            </div>
                            <div className="w-full max-w-full">
                              <div className="form-control w-full max-w-full flex justify-center">
                                <div className="relative">
                                  <Field
                                    as="select"
                                    name="eventCPCountryPhoneId"
                                    id=""
                                    className="mr-2.5 c-select"
                                  >
                                    {countryPhones.map((country: any) => (
                                      <option
                                        key={country.id}
                                        value={country.id}
                                      >
                                        {country.code + country.mobileCode}
                                      </option>
                                    ))}
                                  </Field>
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <IoIosArrowDown className="text-2xl text-[#8E919B] " />
                                  </div>
                                </div>

                                <div className="w-full max-w-full">
                                  <div className="form-control w-full max-w-full">
                                    <div className="form-control-input">
                                      <Field
                                        name="eventCPPhone"
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        placeholder="Contoh: 081100001111"
                                        className="c-input"
                                        maxLength={13}
                                      />
                                      <ErrorMessage
                                        name="eventCPPhone"
                                        component="div"
                                        className="text-red-500 text-xs mt-1"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="event-settings">
                        <div>
                          <div className="title-event-settings mb-[5px] pb-2.5">
                            <span className="sm:text-[1.313rem] text-[1.212rem] text-[#152955] font-medium mb-2.5">
                              Formulir Data Pemesanan
                            </span>
                          </div>
                          <div className="mt-2.5 -ml-[15px] flex flex-wrap">
                            {orderDataFormCheck.map((item, index) => (
                              <div
                                className={`w-full ${index === 0 ? '' : 'mt-[15px]'} pl-[15px] md:text-base text-sm text-[#595959]`}
                                key={index}
                              >
                                <Field
                                  type="checkbox"
                                  name={item.id}
                                  value={item.value}
                                  className="-mt-1 mr-2 size-4"
                                  {...(item.checkStatus === true
                                    ? { checked: true }
                                    : {})}
                                />
                                <label htmlFor={item.id}>
                                  {item.formTitle}
                                </label>
                                <ErrorMessage
                                  name={item.id}
                                  component="div"
                                  className="text-red-500 text-xs mt-1"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="form-info mt-4 p-[16px_12px] border border-[#dbdfe7] bg-[#f5f7fa] rounded-lg flex text-[#494a4a] gap-3 text-sm">
                            <div className="mt-[5px] text-[#adb6c9] text-sm">
                              <IoIosInformationCircle />
                            </div>
                            <p>
                              Kamu dapat menambah{' '}
                              <Link
                                href="#"
                                className="text-[#151416] underline font-bold"
                              >
                                Formulir Data Tambahan
                              </Link>{' '}
                              di Dashboard Event.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="title-event-settings mb-[5px] pb-2.5">
                            <span className="sm:text-[1.313rem] text-[1.212rem] text-[#152955] font-medium mb-2.5">
                              Pengaturan Tambahan
                            </span>
                          </div>
                          <div className="mt-2.5 **:leading-[28px] flex ">
                            <div className="flex flex-col flex-1">
                              <span className="mt-1 text-base text-[#151416]">
                                {'Jumlah maks. tiket per transaksi'}
                              </span>
                              <span className="text-sm text-[#8e919b]">
                                Jumlah maksimal tiket yang dapat dibeli dalam 1
                                transaksi
                              </span>
                            </div>
                            <div className="w-auto max-w-full pl-[15px]">
                              <div className="w-full md:w-[60%] max-w-full relative z-999">
                                <Link href={''} onClick={handleSelectMaxTicket}>
                                  <h2 className="min-w-20 p-3 relative text-sm border border-[#e8e8e8] rounded-lg">
                                    {`${ticketPurchasedMax} Tiket`}
                                    <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#8E919B] " />
                                  </h2>
                                </Link>
                                <div
                                  className={`${ticketMaxOpen ? ' block' : 'hidden'} absolute left-0 top-full mt-0.5 max-w-[120px] min-w-[120px] rounded-lg bg-white text-[#595959] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,.15)]`}
                                  ref={dropdownRef}
                                >
                                  <ul className="whitespace-nowrap text-sm list-none">
                                    <MaxTicketSelector />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2.5 **:leading-[28px] flex ">
                            <div className="flex flex-col flex-1">
                              <span className="mt-1 text-base text-[#151416]">
                                {'1 akun email - 1 kali transaksi'}
                              </span>
                              <span className="text-sm text-[#8e919b]">
                                {
                                  '1 akun email hanya dapat melakukan 1 kali transaksi pembelian tiket.'
                                }
                              </span>
                            </div>
                            <div className="w-auto max-w-full pl-[15px]">
                              <label
                                htmlFor="hs-basic-usage"
                                className="relative inline-block w-11 h-6 cursor-pointer"
                              >
                                <Field
                                  name="oneEmailOneTransaction"
                                  type="checkbox"
                                  id="hs-basic-usage"
                                  value={true}
                                  className="peer sr-only"
                                />
                                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                              </label>
                            </div>
                          </div>
                          <div className="mt-2.5 **:leading-[28px] flex ">
                            <div className="flex flex-col flex-1">
                              <span className="mt-1 text-base text-[#151416]">
                                {'1 tiket - 1 data pemesan'}
                              </span>
                              <span className="text-sm text-[#8e919b]">
                                {
                                  '1 tiket hanya dapat digunakan untuk 1 data pemesan, data antar tiket tidak boleh sama.'
                                }
                              </span>
                            </div>
                            <div className="w-auto max-w-full pl-[15px]">
                              <label
                                htmlFor="hs-basic-usage"
                                className="relative inline-block w-11 h-6 cursor-pointer"
                              >
                                <Field
                                  name="ticketDataFormUnique"
                                  type="checkbox"
                                  id="hs-basic-usage"
                                  value={true}
                                  className="peer sr-only"
                                />
                                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ticket-desc"></div>
                  </div>
                </div>
              </div>
              <div className="footer-cta fixed bottom-0 w-full py-[15px] bg-white shadow-[0_-1px_3px_0_hsla(0,0%,79.6%,.5)] z-[909]">
                <div className="lg:px-10 sm:px-[30px] px-[15px] mx-auto max-w-[1200px]">
                  <div className="flex items-center ">
                    <div className="lg:flex-1 xl:pl-10 sm:pl-[30px] w-full max-w-full ">
                      <h3 className="text-[1.5rem] font-medium leading-[1.4] text-[#4d4d4d] block">
                        {'Yeay! '}
                        <span className="text-sm font-normal">
                          Tinggal selangkah lagi dan event kamu berhasil dibuat
                        </span>
                      </h3>{' '}
                    </div>
                    <div className="lg:w-auto w-full max-w-full lg:pl-10 sm:pl-[30px] flex ">
                      <div className="flex lg:w-auto w-1/2 max-w-full pl-[15px] ">
                        <button className="w-full max-w-full c-button c-button-tertiary">
                          <span>Simpan Draf</span>
                        </button>
                      </div>
                      <div className="flex-1 lg:w-auto w-1/2 max-w-full pl-[15px] ">
                        <button
                          type="submit"
                          className="w-full max-w-full c-button c-button-primary"
                        >
                          <span>Buat Event Sekarang</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-loading"></div>
        </div>
        <div
          className={`${modalOpen && openModalType === 'eventCategories' ? '' : 'hidden '}event-category-modal flex lg:px-10 sm:p-[50px_30px] fixed top-0 left-0 right-0 bottom-0 bg-black/60 w-full h-full z-[999] overflow-auto`}
        >
          <div className="event-category-modal-dialog !m-auto p-[30px] relative w-[600px] bg-white">
            <CloseModalButton />
            <div className="flex flex-wrap">
              <div className="w-full max-w-full">
                <div className="form-stacked">
                  <div className="mb-5">
                    <div className="mb-2.5 relative">
                      <label className="text-sm font-medium text-[#595959] capitalize">
                        Format
                        <em className="text-[#f0506e]">*</em>
                      </label>
                    </div>
                    <div className="w-full max-w-full">
                      <div className="form-control w-full max-w-full">
                        <div className="form-control-input">
                          <Field
                            as="select"
                            name="eventFormatId"
                            className="c-input"
                          >
                            <option value={99}>Pilih Format Event</option>
                            {eventCategoryLists.formats.map(
                              (format: IEventFormat) => (
                                <option key={format.id} value={format.id}>
                                  {format.formatName}
                                </option>
                              ),
                            )}
                          </Field>
                          <ErrorMessage
                            name="eventFormatId"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <div className="mb-2.5 relative">
                      <label className="text-sm font-medium text-[#595959] capitalize">
                        Topik
                        <em className="text-[#f0506e]">*</em>
                      </label>
                    </div>
                    <div className="w-full max-w-full">
                      <div className="form-control w-full max-w-full">
                        <div className="form-control-input">
                          <Field
                            as="select"
                            name="eventTopicId"
                            className="c-input"
                          >
                            <option value="">Pilih Topik Event</option>
                            {eventCategoryLists.topics.map(
                              (topic: IEventTopic) => (
                                <option key={topic.id} value={topic.id}>
                                  {topic.topicName}
                                </option>
                              ),
                            )}
                          </Field>
                          <ErrorMessage
                            name="eventTopicId"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <div className="mb-2.5 relative">
                      <label className="text-sm font-medium text-[#595959] capitalize">
                        Tag
                        <em className="text-[#f0506e]">*</em>
                      </label>
                      <p className="text-[10px] text-[#9f9f9f]">
                        Tambahkan kata kunci agar eventmu mudah ditemukan
                      </p>
                    </div>
                    <div className="w-full max-w-full">
                      <div className="form-control w-full max-w-full">
                        <div className="form-control-input">
                          <Field
                            name="eventTag"
                            type="text"
                            placeholder="Pilih topik event"
                            className="c-input"
                          />
                          <ErrorMessage
                            name="eventTag"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <div className="mb-2.5 relative">
                      <label className="text-sm font-medium text-[#595959] capitalize">
                        Jenis Event
                        <em className="text-[#f0506e]">*</em>
                      </label>
                    </div>
                    <div className="w-full max-w-full">
                      <div className="form-control w-full max-w-full">
                        <div className="form-control-input">
                          <div className="radio-event-input mb-2.5 border border-[#d8d8d8] rounded-sm p-2.5 ">
                            <div className="flex">
                              <div className="w-auto max-w-full pl-[15px]">
                                <Field
                                  type="radio"
                                  name="isPrivateEvent"
                                  value={false}
                                  id=""
                                  className="c-input-radio"
                                />
                              </div>
                              <div className="w-full max-w-full flex-1 pl-[15px]">
                                <span className="radio-event-label block text-[15px]">
                                  Public
                                </span>
                                <span className="radio-event-desc block text-[10px] text-[#9f9f9f]">
                                  Event kamu akan tampil di halaman Cari Event
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="radio-event-input mb-2.5 border border-[#d8d8d8] rounded-sm p-2.5 ">
                            <div className="flex">
                              <div className="w-auto max-w-full pl-[15px]">
                                <Field
                                  type="radio"
                                  name="isPrivateEvent"
                                  value={true}
                                  id=""
                                  className="c-input-radio align-middle"
                                />
                              </div>
                              <div className="w-full max-w-full flex-1 pl-[15px]">
                                <span className="radio-event-label block text-[15px]">
                                  Private
                                </span>
                                <span className="radio-event-desc block text-[10px] text-[#9f9f9f]">
                                  Event kamu hanya diakses oleh orang tertentu
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="w-full max-w-full mt-[30px]">
                <button className="w-full max-w-full c-button c-button-primary">
                  <span>Simpan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${modalOpen && openModalType === 'eventDateTime' ? '' : 'hidden '}event-daterange-picker-modal flex lg:px-10 sm:p-[50px_30px] fixed top-0 left-0 right-0 bottom-0 bg-black/60 w-full h-full z-[999] overflow-auto`}
        >
          <div className="event-category-modal-dialog !m-auto p-[30px] relative w-[450px] bg-white">
            <CloseModalButton />
            <div className="flex flex-wrap">
              <div className="w-full max-w-full">
                <div className="tabs-nav relative !max-w-[520px] flex border-b border-[#dbdfe7]">
                  <TabsTitleComponent mainTab="eventDateTime" subTab="first" />
                  <TabsTitleComponent mainTab="eventDateTime" subTab="second" />
                </div>
                {activeTabs.subTab === 'first' && (
                  <div className="form-stacked mt-8">
                    <div className="mb-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Tanggal Mulai
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="eventStartDate"
                              type="date"
                              className="c-input"
                            />
                            <ErrorMessage
                              name="eventStartDate"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Tanggal Berakhir
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="eventEndDate"
                              type="date"
                              className="c-input"
                            />
                            <ErrorMessage
                              name="eventEndDate"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                )}
                {activeTabs.subTab === 'second' && (
                  <div className="form-stacked mt-8 flex w-full max-w-full justify-between">
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Mulai Dari
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="eventStartTime"
                              type="time"
                              className="c-input"
                              step="900"
                            />
                            <ErrorMessage
                              name="eventStartTime"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Sampai
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="eventEndTime"
                              type="time"
                              className="c-input"
                              step="900"
                            />
                            <ErrorMessage
                              name="eventEndTime"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </div>
                )}
              </div>
              <div className="w-full max-w-full mt-[30px]">
                <button className="w-full max-w-full c-button c-button-primary">
                  <span>Simpan</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${modalOpen && openModalType === 'ticketForms' ? '' : 'hidden '}ticket-daterange-picker-modal flex lg:px-10 sm:p-[50px_30px] fixed top-0 left-0 right-0 bottom-0 bg-black/60 w-full h-full z-[999] overflow-auto`}
        >
          <div className="event-category-modal-dialog !m-auto p-[30px] relative w-[600px] bg-white">
            <CloseModalButton />
            <div className="flex flex-wrap">
              <div className="w-full max-w-full">
                <div className="tabs-nav relative !max-w-[520px] flex border-b border-[#dbdfe7]">
                  <TabsTitleComponent mainTab="ticketForms" subTab="first" />
                  <TabsTitleComponent mainTab="ticketForms" subTab="second" />
                </div>
                {activeTabs.subTab === 'first' && (
                  <div className="form-stacked mt-8">
                    <div className="mb-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Nama Tiket
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="ticketName"
                              type="text"
                              placeholder="Maksimal 50 karakter"
                              className="c-input"
                            />
                            <ErrorMessage
                              name="ticketName"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Jumlah Tiket
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="ticketQty"
                              type="number"
                              placeholder=""
                              className="c-input"
                            />
                            <ErrorMessage
                              name="ticketQty"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Harga
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="ticketPrice"
                              type="number"
                              placeholder=""
                              className="c-input"
                            />
                            <ErrorMessage
                              name="ticketPrice"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Deskripsi Tiket
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              as="textarea"
                              name="ticketDesc"
                              id=""
                              className="border border-[#d8d8d8] min-h-[70px] rounded-sm p-2.5 w-full outline-none"
                            ></Field>
                            <ErrorMessage
                              name="ticketDesc"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                )}
                {activeTabs.subTab === 'second' && (
                  <div className="form-stacked mt-8">
                    <div className="mb-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Tanggal Mulai
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="ticketStartDate"
                              type="date"
                              className="c-input"
                            />
                            <ErrorMessage
                              name="ticketStartDate"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="mb-2.5 relative">
                        <label className="text-sm font-medium text-[#595959] capitalize">
                          Tanggal Berakhir
                          <em className="text-[#f0506e]">*</em>
                        </label>
                      </div>
                      <div className="w-full max-w-full">
                        <div className="form-control w-full max-w-full">
                          <div className="form-control-input">
                            <Field
                              name="ticketEndDate"
                              type="date"
                              className="c-input"
                            />
                            <ErrorMessage
                              name="ticketEndDate"
                              component={'div'}
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="mt-[15px] ml-[15px] font-light text-sm leading-[1.5]">{`Tanggal maksimal penjualan bergantung pada tanggal berakhirnya event.`}</span>
                      </div>
                    </div>

                    <div></div>
                  </div>
                )}
              </div>
              <div className="w-full max-w-full mt-[30px]">
                <button className="w-full max-w-full c-button c-button-primary">
                  <span>Simpan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
